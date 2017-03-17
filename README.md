# Vimeo Channel Explorer
Discover videos on Vimeo through channels.

## Live Demo
[http://vimeo-channel-explorer.bitballoon.com/](http://vimeo-channel-explorer.bitballoon.com/)

## Development Setup
```
git clone https://github.com/kevinferri/vimeo-channel-explorer
cd vimeo-channel-explorer
npm install
npm run dev
```
Development server will be started at `http://localhost:8080/`

## Tests
This project uses [Jest](https://facebook.github.io/jest/) for testing.
Tests are located in `/tests`.
To run tests:
```
npm test
```

## Linter
This project uses eslint and [Airbnb's styleguide](https://github.com/airbnb/javascript) for linting.
To run linter:
```
npm run lint
```
If you are using atom, you can use the [eslint plugin](https://atom.io/packages/eslint) for live linting.

## Other Scripts
Build for production:
```
npm run prod
```

Generic build from webpack:
```
npm run build
```
