import {
  handlerChat
} from '../handler/handerChat'

export const watchChat = socket => {
  const chatsocket = socket.of('/chat')
  chatsocket.on('connection', client => {
    client.on('send', (message) => {
      handlerChat.send(client, message)
    })
    client.on('error', (err) => {})
    client.on('disconnect', () => {})
  })
}