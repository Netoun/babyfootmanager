import {
  template
} from './template.js'

const countCurrentGame = (listGames) => {
  const counter = document.getElementById("counter")
  counter.innerHTML = listGames.filter(games => games.isfinished === false).length
}

const addButtontByClassName = (element, socket, row, func) => {
  element.addEventListener('click', () => {
    func(socket, row)
  })
}

const addRow = (game, socket, table, index) => {
  const row = table.insertRow(index)
  if (game.isfinished)
    row.classList.add("isfinish")
  row.setAttribute("key", game.game_id)
  row.innerHTML = template.rowGames(game)
  const finishButton = row.getElementsByClassName("finish")[0]
  addButtontByClassName(finishButton, socket, row, gamesactions.finishGame)
  const deleteButton = row.getElementsByClassName("delete")[0]
  addButtontByClassName(deleteButton, socket, row, gamesactions.deleteGame)
}


export const gamesactions = {
  displayList: (listGames, socket) => {
    countCurrentGame(listGames)
    const table = document.getElementById("games").getElementsByTagName('tbody')[0]
    table.innerHTML = ""
    listGames.map((game, i) => {
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