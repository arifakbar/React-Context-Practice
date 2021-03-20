import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


const Button = () => {
        return (
                <div>
                        <button className="ui button blue">
                                <LanguageContext.Consumer>
                                        {({language})=>language === 'english'? 'Submit':'Vorrleggen'}
                                </LanguageContext.Consumer>
                        </button>
                </div>
        );
};

export default Button;