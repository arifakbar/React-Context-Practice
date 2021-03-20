import React from "react";
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        <h4 className="header">Change Language</h4>
        <button
          className="ui button primary"
          onClick={() => this.context.setLanguage("english")}
        >
          English
        </button>
        <button className="ui button red" onClick={() => this.context.setLanguage("dutch")}>
          Dutch
        </button>
      </div>
    );
  }
}

export default LanguageSelector;
