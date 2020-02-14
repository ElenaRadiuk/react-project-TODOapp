import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List/List'

import AddTask from './container/AddTask';
import AddSubTask from './container/AddSubTask';

import './components/style.scss'
import ListMainTask from './container/ListMainTask';
import ListSubTask from './container/ListSubTask';

function App() {
  return (
    <div className="App">
        <div className="todo">

          <div className="todo__sidebar">
           
            <ListMainTask />
            <AddTask />
           
          </div>

          <div className="todo__tasks">
            задачи

            <ListSubTask />
            <AddSubTask />
          </div>
           
        </div>
    </div>
  );
}

export default App;
