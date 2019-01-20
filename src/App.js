import React, { Component } from 'react';
import {GlobalStyle} from './style.js';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
         <Header />
      </div>
    );
  }
}

export default App;
