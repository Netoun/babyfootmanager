import {
  removeElement,
  removeClassElement
} from './utils';
import {
  template
} from './template.js'

const chat = document.getElementById("content-chat")

const addMessage = (templateHtml, message) => {
  chat.innerHTML += templateHtml(message)
  chat.scrollTop = chat.scrollHeight;
}

export const chatactions = {
  removeBoxPseudo: () => {
    removeClassElement(document.getElementById("card-chat"), "card-blur")
    removeElement(document.getElementById("columnchat"), document.getElementById("box"))
  },
  displayMessage: (message) => {
    addMessage(template.rowChatThem, message)
  },
  sendMessage: (event, socket) => {
    if (event.keyCode === 13) {
      if (event.srcElement.value) {
        const message = {
          username: localStorage.getItem('username'),
          text: event.srcElement.value
        }
        socket.emit('send', message)
        addMessage(template.rowChatYou, message)
        event.srcElement.value = ""
      }
    }
  },
  addPseudo: (event, socket) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      localStorage.setItem('username', event.srcElement.value)
      chatactions.removeBoxPseudo()
    }
  }
}