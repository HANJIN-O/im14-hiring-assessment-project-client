import React from 'react';
import logo from './logo.svg';
import './App.css';
import DOM from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <span className="main .fixed">
    <div className="hello"><span id='hello'>어플리케이션을 골라주세요</span></div>
    <div className='button-space'>
      <span className='todo'><button id='todo'>투두</button></span>
      <span className='board'><button id='board'>게시판</button></span>
    </div>
    </span>
    </div>
  );
}

export default App;
