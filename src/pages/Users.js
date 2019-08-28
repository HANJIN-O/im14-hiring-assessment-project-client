import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import remote from '../lib/koreanjson'
import '../stylesheet/Users.css'

export default class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: null
    }
  }
  componentDidMount(){
    remote.get(remote.url+'/users').then(res => {
      this.setState({
        users: res.data
      })
    })
  }
  render() {
    return (
      <div className='users'>
      <div className="side">&nbsp;</div>
      <div className="mid"><span><ul>{
          this.state.users && this.state.users.map(user => {
            return <li key={JSON.stringify(user.name)}>{user.name}</li>
          })
      }</ul></span></div>
      <div className="side"><Link to='/'><button>Home</button></Link></div>
      </div>
    )
  }
}
