import env from 'common-env'

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  socket: {
    url: 'http://localhost:3001',
    chat: 'chat',
    games: 'games',
  }
})