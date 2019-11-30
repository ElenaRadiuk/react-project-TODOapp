import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List/List'

import './components/style.scss'

function App() {
  return (
    <div className="App">
        <div className="todo">

          <div className="todo__sidebar">
            <List />
          </div>

          <div className="todo__tasks">
          задачи
          </div>
           
        </div>
    </div>
  );
}

export default App;
