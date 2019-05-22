import {
  gamesactions
} from './js/games.actions'

import '../src/styles/index.css'
import '../src/styles/bulma.scss'
import '@fortawesome/fontawesome-free/js/all'
import io from 'socket.io-client'

// URL des socket de la gestion des parties et de message instantané
const gamesocket = io('http://127.0.0.1:3001/games')

//Connection au socket
const connectGame = () => {
  gamesocket.on('connect', () => {
    console.log('connect games')
  })
}

//Ecoute l'event liste
gamesocket.on('liste', (listGames) => {
  gamesactions.displayList(listGames, gamesocket)
})

const createEventButton = () => {
  const addButton = document.getElementById('buttongame')
  addButton.addEventListener('click', (() => {
    gamesactions.addGame(gamesocket)
  }))
}

//ajout l'event au boutton et lance la connection au socket
const init = () => {
  connectGame()
  createEventButton()
}

init()