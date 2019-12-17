import React from 'react';
import { withTranslation } from 'react-i18next';
import UiLanguageSelector from '../../shared/components/UiLanguageSelector/UiLanguageSelector';
import './MainPage.scss';

class MainPage extends React.Component {
  render() {
    const {t} = this.props;

    return (
      <div className="main-page">
        <UiLanguageSelector/>
        <p>{t('greetings', {username: 'ghost'})}</p>
        <p>{t('secretMessage')}</p>
      </div>
    );
  }
}

MainPage.propTypes = {};

export default withTranslation('mainPage')(MainPage);