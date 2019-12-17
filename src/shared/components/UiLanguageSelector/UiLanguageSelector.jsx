import React from 'react';
import { withTranslation } from 'react-i18next';
import './UiLanguageSelector.scss';

class UiLanguageSelector extends React.Component {
  constructor() {
    super();
  }

  onChangeLanguage = () => {
    const {i18n} = this.props;
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  render() {
    const {i18n} = this.props;

    return (
      <div className="ui-language-selector">
        <button onClick={this.onChangeLanguage}>{i18n.language}</button>
      </div>
    );
  }
}

export default withTranslation('common')(UiLanguageSelector);