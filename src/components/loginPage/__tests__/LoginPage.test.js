import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoginPage from '../LoginPage';
import { LOGIN_REQUESTED, LOGIN_SUCCESS } from '../../../store/actionTypes';
import { history, store } from './__mocks__';

jest.mock('react-i18next', () => ({
  withTranslation: () => Component => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: key => key,
      i18n: {
        language: 'en',
        changeLanguage: (language) => {
        }
      }
    };
    return Component;
  }
}));

describe('Login page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store.emptyToken}>
        <LoginPage history={history}/>
      </Provider>
    );
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not send empty form', () => {
    // arrange
    const loginPage = wrapper.find(LoginPage).children();
    const button = wrapper.find('.login-page__submit-button');

    // act
    button.simulate('click');

    // assert
    const expectedAction = {
      type: LOGIN_REQUESTED,
      payload: {
        username: 'admin',
        password: 'admin'
      }
    };
    expect(store.emptyToken.getActions()).not.toContainEqual(expectedAction);
  });

  it('should send with form with content', () => {
    // arrange
    const loginPage = wrapper.find(LoginPage).children();
    const button = wrapper.find('.login-page__submit-button').first();
    loginPage.setState({
      username: 'admin',
      password: 'admin'
    });
    store.emptyToken.dispatch({
      type: LOGIN_SUCCESS,
      dispatch: {
        token: '12345'
      }
    });
    console.log(store.emptyToken);

    // act
    button.simulate('click');

    // assert
    const expectedAction = {
      type: LOGIN_REQUESTED,
      payload: {
        username: 'admin',
        password: 'admin'
      }
    };
    expect(store.emptyToken.getActions()).toContainEqual(expectedAction);
  });

  it('should redirect with valid token', () => {
    // arrange
    wrapper = mount(
      <Provider store={store.token}>
        <LoginPage history={history}/>
      </Provider>
    );

    // act

    // assert
    expect(history.push).toHaveBeenCalled();
  });
});
