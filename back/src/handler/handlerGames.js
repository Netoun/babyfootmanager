import {
  database,
  executeSql
} from '../utils/postgres'
import {
  Socket
} from 'net';

export const handlerGames = {
  getGames: socket => {
    const query = 'SELECT * FROM public."game"'
    executeSql(database, query, []).then(res => {
      socket.emit("liste", res)
    })
  },
  createGame: name => {
    const query = 'INSERT INTO public."game"( name ) VALUES( $1::text );'
    return new Promise((resolve, reject) => {
      const reply = executeSql(database, query, [name])
      resolve(reply)
    })
  },

  deleteGame: uuid => {
    const query = 'DELETE FROM public."game"  WHERE game_id = $1::uuid'
    return new Promise((resolve, reject) => {
      const reply = executeSql(database, query, [uuid])
      resolve(reply)
    })
  },
  finishGame: uuid => {
    const query = 'UPDATE public."game" SET isfinished = true WHERE game_id = $1::uuid'
    return new Promise((resolve, reject) => {
      const reply = executeSql(database, query, [uuid])
      resolve(reply)
    })
  }
}