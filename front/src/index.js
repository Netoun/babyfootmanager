import {
  gamesactions
} from './js/gameActions'
import {
  chatactions
} from './js/chatActions'
import '../src/styles/index.css'
import '../src/styles/bulma.scss'
import '@fortawesome/fontawesome-free/js/all'
import io from 'socket.io-client'
import {
  config
} from './js/config'
import {
  addEventButtonClick,
  addEventButtonKey
} from './js/utils'



// URL des socket de la gestion des parties et de message instantané
const gamesocket = io(`${config.socket.host}:${config.socket.port}/games`)
const chatsocket = io(`${config.socket.host}:${config.socket.port}/chat`)

//Connection au socket
const connectGame = () => {
  gamesocket.on('connect', () => {})
  chatsocket.on('connect', () => {
    if (!localStorage.getItem('username')) {
      const username = document.getElementById("username")
      username.addEventListener("keyup", (event => {
        chatactions.addPseudo(event, chatsocket)
      }))
    } else {
      chatactions.removeBoxPseudo()
    }
  })
}

//Ecoute l'event liste
gamesocket.on('liste', (listGames) => {
  gamesactions.displayList(listGames, gamesocket)
})

chatsocket.on('receive', (message) => {
  chatactions.displayMessage(message)
})

const createEventButton = () => {
  const addButton = document.getElementById('buttongame')
  addEventButtonClick(addButton, gamesocket, gamesactions.addGame)

  const inputMessage = document.getElementById("input-message")
  addEventButtonKey(inputMessage, chatsocket, chatactions.sendMessage)
}

//ajout l'event au boutton et lance la connection au socket
const init = () => {
  connectGame()
  createEventButton()
}

init()