export const handlerChat = {
  send: (client, message) => {
    client.broadcast.emit('receive', message)
  }
}