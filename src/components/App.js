import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    relatives = ["barun", "pankaj", "sayan"];
    return (
      <div id="main">
        <ol key="relativeList">
          {this.relatives.map((relative, index) => (
            <li key={"relativeListItem${index+1}"}>{relative}</li>
          ))}
        </ol>
        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
