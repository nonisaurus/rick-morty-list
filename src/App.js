import React, { Component} from 'react';
import './App.css';
import Aside from './Aside';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default App;
