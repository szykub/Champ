import React, { Component } from 'react';
import './App.css';

import { PlayersInput } from "./components/PlayersInput/PlayersInput"

class App extends Component {
  state = {
    schools:[{
        value: "Uniwesytet Śląski"
    },{
        value: "Uniwersytet Ekonomiczny"
    },{
        value: "Jakas bardzo dluga nazwa uczelni jaka ktos sobie wymyslil"
    }],
  }



  render() {
      return (
        <div className="App">
            <PlayersInput 
                addPlayer={this.handlePlayerAdd} 
                schools={this.state.schools} 

            />
        </div>
      );
  }
}

export default App;