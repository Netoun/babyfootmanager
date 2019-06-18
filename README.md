# BabyFoot Manager

BabyFoot Manager is a web application for creating babyfoot games. Its particularity will be to be able to create games in a collaborative way.


All application run in three docker containers : 
  - front
  - back
  - database
  
## Prerequisites

What things you need to install the software and how to install them

- run : https://docs.docker.com/install/.
- developpement : https://nodejs.org/en/


## Run babyfoot-manager

Setup environnement variables :

./database/.env: 
```
POSTGRES_USER=easilys
POSTGRES_PASSWORD=recrutement
POSTGRES_DB=babyfootmanager
```

./back/.env:
```
EXPRESS_PORT=3000
POSTGRESS_USER=easilys
POSTGRES_HOST=baby-db
POSTGRES_DATABASE=babyfootmanager
POSTGRES_HOST_PASSWORD=recrutement
POSTGRES_HOST_PORT=5432
NODE_ENV=production
```

./front/.env:
```
SOCKET_HOST=http://localhost
SOCKET_PORT=3000
NODE_ENV=production
```

Then, run this command in root project:

```
docker-compose up -d
```

## Installing for developpement

To install dependencies and start in develeppement mode

```bash
yarn
yarn start
```

In `./back/src/utils/config.js` edit postgres variables: 

```js
export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  express: {
    port: 3001
  },
  postgres: {
    user: YOUR_USER_DB,
    host: YOUR_HOST_DB,
    database: YOUR_NAME_DB,
    password: YOUR_PASSWORD_DB,
    port: YOUR_PORT_DB
  }
})
```

## Built With

* [Express](http://www.dropwizard.io/1.0.2/docs/) - Fast, unopinionated, minimalist web framework for Node.js
* [Socket IO](https://socket.io/) - Featuring the fastest and mode reliable real-time engine
* [Webpack 4](https://rometools.github.io/rome/) - Module bundler for javascript
* [Bulma](https://bulma.io/) - CSS framework built whit sass


