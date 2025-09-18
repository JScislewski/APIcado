# APIcado Client

A desktop API client built with Electron and React.

## Getting Started

### Install dependencies

```sh
npm install
```

### Run in development mode

```sh
npm start
```

- Starts React dev server and Electron app together.

### Build for production

```sh
npm run build
npm run electron-build
```

- Builds React app and packages Electron app for distribution.

## Project Structure
- `public/electron.js`: Electron main process
- `src/`: React UI code
- `public/index.html`: HTML entry point

## Features
- Send API requests (GET, POST, PUT, DELETE)
- View responses

## Next Steps
- Add support for headers, authentication, and request history
- Improve UI/UX
