# nine-coding-challenge
nine entertainment coding challenge for node

## Quick Start

## Installation

Clone the repo:

```bash
git clone https://github.com/z3shan/nine-coding-challenge.git
cd nine-coding-challenge
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.sample .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Validation](#validation)

## Features

- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Testing**: covered unit tests using [Jest](https://jestjs.io)
- **Dependency management**: with [NPM](https://www.npmjs.com/)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)

## Commands

Running locally:

```bash
npm run start:dev
```

Running in production:

```bash
npm start
```

Testing:

```bash
# run all tests
npm test

# run all tests in watch mode
npm run test:watch
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

```

## Project Structure

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--routes\         # Routes
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--server.js        # App entry point
```

### API Endpoints

List of available routes:

**Shows routes**:\
`POST /` - returns information about shows which have DRM enabled and has at least one episode\

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.
## License

[MIT](LICENSE)