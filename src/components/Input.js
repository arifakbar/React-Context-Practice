import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Input = () => {
        return (
                <div className="ui form">
                        <label className="header">
                        <LanguageContext.Consumer>
                                        {({language})=>language === 'english'? 'Name':'Naam'}
                                </LanguageContext.Consumer>
                        </label>
                        <input />
                </div>
        );
};

export default Input;