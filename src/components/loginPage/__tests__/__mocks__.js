import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

const sagaMiddleWare = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleWare]);

export const history = {
  push: jest.fn()
};

export const store = {
  emptyToken: mockStore({
    auth: {
      token: ''
    }
  }),
  token: mockStore({
    auth: {
      token: '12345'
    }
  })
};