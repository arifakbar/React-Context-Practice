import React from "react";
import UserContent from "./UserContent";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <LanguageStore >
          <LanguageSelector />
          <UserContent />
        </LanguageStore >
      </div>
    );
  }
}

export default App;
