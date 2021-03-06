import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@blueprintjs/core"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit ur mama's house <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Button icon="refresh" intent="danger" text="Reset" />
      </header>
    </div>
  );
}

export default App;
