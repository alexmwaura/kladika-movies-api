<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Api Documentaion

Open [https://kladika-api.herokuapp.com/api/](https://kladika-api.herokuapp.com/api/) on any browser to open the swagger platform and get to interact with the API

endpooint: https://kladika-api.herokuapp.com/

![](https://i.imgur.com/PBr3I1T.png)

### Api Instructions

- Login with
  - POST /api/login

```javascript
{
  username: admin,
  passowrd: admin
}
```

to maintain session that expires after several hours

- - response

```
{
  "msg": "Logged in!"
}
```

### Genre

- POST /api/genre

```javascript
  {
  "genre": [
    "Action",
    "Horro"
  ]
}
```

-
- response

```
{
 "genre": [
   "Action",
   "Horror"
 ],
 "id": "b550ded3-3539-4e59-89f4-b1765dfc3a12"
}
```

- GET /api/genre
- GET /api/genre/{id}
- PATCH /api/genre/{id}
- DELETE /api/genre/{id}

example id:

```
b550ded3-3539-4e59-89f4-b1765dfc3a12
```

type of UUID

### Movie

To add a movie
- POST /api/movies

```javascript
{
"title": string,
"maxAge": number,
"releaseDate": Date,
"genreId": UUID,
"type": [
  "Kids",
  "NewRelease",
  "Regular"
],
"popularity": number/float
}
```

- GET /api/movies
response is an array of movies.
```
[
  {
    "id": "d9c53808-2236-469e-82ea-a751aa68a6f0",
    "title": "John Wick",
    "type": "{\"Kids\",\"NewRelease\",\"Regular\"}",
    "popularity": 9.8,
    "maxAge": 18,
    "releaseDate": "2023-01-10T00:00:00.000Z",
    "genre": {
      "genreId": "3df7fbce-aec7-490f-aaa0-4c7b8ae84f80",
      "genre": "{\"Action\",\"Comedy\"}"
    },
    "rentals": [
      {
        "id": "5495e482-306e-4643-9fc4-941fb38aac72",
        "client_name": "Trevor Noah",
        "rental_fee": 700,
        "movieId": "d9c53808-2236-469e-82ea-a751aa68a6f0"
      },
      {
        "id": "ad98add9-bc7e-4aec-9a31-eba2d91235a1",
        "client_name": "john doe",
        "rental_fee": 700,
        "movieId": "d9c53808-2236-469e-82ea-a751aa68a6f0"
      }
    ]
  }
]
```

- GET /api/movies/{id}
- PATCH /api/movies/{id}
- DELETE /api/movies/{id}

example id:

```
d9c53808-2236-469e-82ea-a751aa68a6f0
```

### Rental

To rent a movie
- POST /api/rental

```javascript
{
  "rental_fee": number,
  "client_name": "string",
  "movieId": UUID
}
```

- GET /api/rental
response is an arrya of rented movies
```
[
  {
    "id": "ad98add9-bc7e-4aec-9a31-eba2d91235a1",
    "client_name": "john doe",
    "rental_fee": 700,
    "movieId": "d9c53808-2236-469e-82ea-a751aa68a6f0",
    "movie": {
      "id": "d9c53808-2236-469e-82ea-a751aa68a6f0",
      "title": "John Wick",
      "type": "{\"Kids\",\"NewRelease\",\"Regular\"}",
      "popularity": 9.8,
      "maxAge": 18,
      "releaseDate": "2023-01-10T00:00:00.000Z",
      "genreId": "3df7fbce-aec7-490f-aaa0-4c7b8ae84f80"
    }
  },
  {
    "id": "5495e482-306e-4643-9fc4-941fb38aac72",
    "client_name": "Trevor Noah",
    "rental_fee": 700,
    "movieId": "d9c53808-2236-469e-82ea-a751aa68a6f0",
    "movie": {
      "id": "d9c53808-2236-469e-82ea-a751aa68a6f0",
      "title": "John Wick",
      "type": "{\"Kids\",\"NewRelease\",\"Regular\"}",
      "popularity": 9.8,
      "maxAge": 18,
      "releaseDate": "2023-01-10T00:00:00.000Z",
      "genreId": "3df7fbce-aec7-490f-aaa0-4c7b8ae84f80"
    }
  }
]
```

- GET /api/rental/{id}
- PATCH /api/rental/{id}
- DELETE /api/rental/{id}

example id:

```
ad98add9-bc7e-4aec-9a31-eba2d91235a1
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
