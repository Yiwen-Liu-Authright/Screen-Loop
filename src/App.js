import React from 'react';
//import logo from './logo.svg';
import ScreenLoop from './containers/ScreenLoop';
//import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid" style={{ marginTop: "100px" }}>
        <div className="container">
          <ScreenLoop />
        </div>
      </div>
    </div>
  );
}

export default App;
