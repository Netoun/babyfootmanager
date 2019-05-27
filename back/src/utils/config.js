import env from 'common-env'

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  express: {
    port: 3000
  },
  postgres: {
    user: 'easilys',
    host: '127.0.0.1',
    database: 'babyfootmanager',
    password: 'recrutement',
    port: 5432
  }
})