import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import UiLanguageSelector from '../../shared/components/UiLanguageSelector/UiLanguageSelector';
import authActions from '../../store/actions/authActions';
import authSelector from '../../store/selectors/authSelector';
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    const {history, isAuthorized} = this.props;
    if (isAuthorized) {
      history.push('/');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {history, isAuthorized} = this.props;
    if (isAuthorized) {
      history.push('/');
    }
  }

  onFieldChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  login = () => {
    const {login} = this.props;
    const {username, password} = this.state;
    const preparedUsername = username.trim();
    const preparedPassword = password.trim();
    if (!preparedUsername || !preparedPassword) {
      return;
    }

    login(preparedUsername, preparedPassword);
  };

  render() {
    const {t} = this.props;

    return (
      <div className="login-page">
        <UiLanguageSelector/>
        <p>{t('username')}</p>
        <input
          type="text"
          onChange={event => this.onFieldChange('username', event.target.value)}
        />
        <p>{t('password')}</p>
        <input
          type="text"
          onChange={event => this.onFieldChange('password', event.target.value)}
        />
        <button
          className="login-page__submit-button"
          onClick={this.login}
        >{t('loginButton')}</button>
      </div>
    );
  }
}

LoginPage.propTypes = {};

const mapStateToProps = (state) => ({
  isAuthorized: authSelector.getAuthorized(state)
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators(authActions, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation('loginPage')(LoginPage));