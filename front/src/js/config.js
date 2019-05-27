import env from 'common-env'
import dotenv from 'dotenv'

dotenv.config()

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  socket: {
    host: 'http://localhost',
    port: 3000
  }
})