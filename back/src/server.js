import express from 'express'
import Io from 'socket.io'
import {
  config
} from './utils/config'

export default function start() {
  const server = express()

  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    next()
  })

  const io = server.listen(config.express.port, () => {
    console.log(config.express.port)
  })
  const socket = Io(io)


  return server
}