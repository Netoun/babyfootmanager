import {
  template
} from './template.js'
import {
  addEventButtontByClassName
} from './utils'

const table = document.getElementById("games").getElementsByTagName('tbody')[0]

const countCurrentGame = (listGames) => {
  const counter = document.getElementById("counter")
  counter.innerHTML = listGames.filter(games => games.isfinished === false).length
}

const addButtonsToRow = (socket, row) => {
  const finishButton = row.getElementsByClassName("finish")[0]
  addEventButtontByClassName(finishButton, socket, row, gamesactions.finishGame)
  const deleteButton = row.getElementsByClassName("delete")[0]
  addEventButtontByClassName(deleteButton, socket, row, gamesactions.deleteGame)
}

const addRow = (game, socket, table, index) => {
  const row = table.insertRow(index)
  row.setAttribute("key", game.game_id)

  if (game.isfinished)
    row.classList.add("isfinish")

  row.innerHTML = template.rowGames(game)

  addButtonsToRow(socket, row)

}

export const gamesactions = {
  displayList: (listGames, socket) => {
    table.innerHTML = ""

    countCurrentGame(listGames)

    listGames.reverse().map((game, i) => {
      addRow(game, socket, table, i)
    })
  },
  addGame: socket => {
    const newGame = document.getElementById("inputgame")

    newGame.classList.remove("is-danger")
    if (newGame.value.length < 5) {
      newGame.classList.add("is-danger")
      return
    }

    socket.emit("add", newGame.value)
    newGame.value = ""
  },
  deleteGame: (socket, row) => {
    socket.emit("delete", row.getAttribute("key"))
  },
  finishGame: (socket, row) => {
    socket.emit("finish", row.getAttribute("key"))
  }
}