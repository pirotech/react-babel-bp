# React boilerplate with babel

### Include

- React-[Router](https://reacttraining.com/react-router/web/guides/quick-start)-[Redux](https://redux.js.org/)
- [Redux sagas](https://redux-saga.js.org/)
- [Scss](https://sass-lang.com/)
- [I18next](https://www.i18next.com/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [Enviroment variables](https://www.npmjs.com/package/dotenv-webpack)

### Project structure

Project contains layers. Some of them form a chains. Main chain is a `api -> service -> page component`. Next chain is
`page component -> redux <-> sagas`. Login page is a good example showing that chain. Login page must calls api for
authorization and store must contains token for this page. In result the page communicates with redux store when we want
send username and password, but async call handled with sagas. Further we receive response (good or not) in redux and
notify login page about it.

##### Api layer

Folder `api` contains api layer. Every `*Api.js` file contains object with functions that communicate with server by
axios. Separated `*Api.js` files are intended for specific essences in most cases. Axios tuned instance located in
`index.js` file.

##### Service layer

Folder `services` contains services layer. Every `*Service.js` file contains object with functions that collect several
or one api calls in one promise, also in that point occur data mapping.

##### Redux store layer

Folder `store` contains redux store layer. Folders `actions`, `reducers`, `selectors` contain action creators, reducers
and selectors accordingly. In `index.js` file of reducers folder forms root reducer. Action types represented as a
separate constants, because they may be useful in several places. Sagas collected in one file `sagas.js`
