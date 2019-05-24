import {
  handlerGames
} from '../handler/handlerGames'

export const watchGames = socket => {
  const gamesocket = socket.of('/games')
  gamesocket.on('connection', client => {
    handlerGames.getGames(client)
    client.on('add', (name) => {
      handlerGames.createGame(name).then(() => {
        handlerGames.getGames(gamesocket)
      })
    })
    client.on('delete', (uuid) => {
      handlerGames.deleteGame(uuid).then(() => {
        handlerGames.getGames(gamesocket)
      })
    })
    client.on('finish', (uuid) => {
      handlerGames.finishGame(uuid).then(() => {
        handlerGames.getGames(gamesocket)
      })
    })
    client.on('error', (err) => {})
    client.on('disconnect', () => {})
  })
}