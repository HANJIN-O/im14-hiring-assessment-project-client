import React, { Component } from 'react'
import '../stylesheet/Home.css';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
        <div className="Home">
        <span className="main .fixed">
        <div className="hello"><span id='hello'>어플리케이션을 골라주세요</span></div>
        <div className='button-space'>
          <span className='todo'><Link to='/users'><button id='todo'>투두</button></Link></span>
          <span className='board'><Link to='/board'><button id='board'>게시판</button></Link></span>
        </div>
        </span>
        </div>
    )
  }
}