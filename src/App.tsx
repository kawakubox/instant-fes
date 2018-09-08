import firebase from 'firebase';
import * as React from 'react';
import './App.css';
import {FirebaseConfig} from './AppConfig'

import logo from './logo.svg';

class App extends React.Component {
  public render() {

    firebase.initializeApp(FirebaseConfig.config);
    console.log(firebase.app().name);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
