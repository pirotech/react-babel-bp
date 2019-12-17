import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { history, store } from './store';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n';
import RouteAuthorized from './shared/components/routeAuthorized/RouteAuthorized';
import LoginPage from './components/loginPage/LoginPage';
import MainPage from './components/mainPage/MainPage';
import './shared/styles/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <I18nextProvider i18n={i18next}>
          <Switch>
            <Route path="/login" component={LoginPage}/>
            <RouteAuthorized path="/" exact component={MainPage}/>
            <Redirect to="/login"/>
          </Switch>
        </I18nextProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
