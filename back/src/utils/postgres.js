import {
  Pool
} from 'pg'
import {
  config
} from './config'

const initDb = () => {
  const db = new Pool({
    user: config.postgres.user,
    host: config.postgres.host,
    database: config.postgres.database,
    password: config.postgres.password,
    port: config.postgres.port
  })

  return db
}
export const database = initDb()

export const executeSql = (db, query, params) => {
  return db.query(query, params).then(res => res.rows)
}