import React from "react";

const Context = React.createContext();

export class LanguageStore extends React.Component {
        state = {language:"english"};
        setLanguage = (lang) => {
                this.setState({language:lang});
        }
        render(){
                return(
                        <Context.Provider value={{...this.state, setLanguage: this.setLanguage}}>
                                {this.props.children}
                        </Context.Provider>
                )
        }
}

export default Context;

// import React from 'react';

// const Context = React.createContext('english');

// export class LanguageStore extends React.Component {
//   state = { language: 'english' };

//   setLanguage = language => {
//     this.setState({ language });
//   };

//   render() {
//     return (
//       <Context.Provider
//         value={{ ...this.state, setLanguage: this.setLanguage }}
//       >
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }
// export default Context;
