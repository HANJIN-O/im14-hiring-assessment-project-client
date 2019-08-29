import React, { Component } from "react";
import { Link } from "react-router-dom";
import remote from "../lib/koreanjson";
// import dummy from "../dummy.json";
import queryString from "query-string";
import "../stylesheet/Users.css";
// import UserProfile from "../components/UserProfile";
// import UserParams from "../components/UserParams"
// import UserTodo from "../components/UserTodo"
// import Nav from "../components/Nav"
// import {UserProfile, UserParams, UserTodo, Nav} from '../components'
import components from "../components";
let { UserProfile, UserParams, UserTodo, Nav } = components;

export default class Users extends Component {
  constructor(props, { location, match }) {
    super(props, { location, match });
    this.state = {
      users: null,
      user: null,
      clicked: null
    };
    this.query = queryString.parse(this.props.location.search);
  }
  componentDidMount() {
    remote.get(remote.url + "/users").then(res => {
      this.setState({
        users: res.data
      });
    });
  }
  handleClick = option => {
    this.setState({
      clicked: option
    });
  };
  handle;
  render() {
    if (!this.props.match.params.index) {
      return (
        <div className="users">
          <div className="side">&nbsp;</div>
          <div className="mid">
            <span>
              <ul className="user-list">
                {this.state.users &&
                  this.state.users.map((user, index) => {
                    let link = "/users/" + (index + 1);
                    return (
                      <Link to={link} key={index + 1}>
                        <li className="user" key={index + 1}>
                          {user.name}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </span>
          </div>
          <div className="side">
            <Nav></Nav>
          </div>
        </div>
      );
    } else if (this.state.clicked === null) {
      return (
        <>
          <UserParams onClick={this.handleClick}></UserParams>
          <div className="side">
            <Nav></Nav>
          </div>
        </>
      );
    } else if (this.state.clicked === "profile") {
      return (
        <>
          <UserParams onClick={this.handleClick}></UserParams>
          <UserProfile
            user={this.state.users[this.props.match.params.index - 1]}
          ></UserProfile>
          <div className="side">
            <Nav></Nav>
          </div>
        </>
      );
    } else if (this.state.clicked === "todo") {
      return (
        <>
          <UserParams onClick={this.handleClick}></UserParams>
          <UserTodo
            user={this.state.users[this.props.match.params.index - 1]}
          ></UserTodo>
          <div className="side">
            <Nav></Nav>
          </div>
        </>
      );
    }
  }
}
