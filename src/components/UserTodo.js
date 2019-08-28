import React from "react";
import remote from "../lib/koreanjson";
import '../stylesheet/UserTodo.css'

class UserTodo extends React.Component {
  state = {
    todos: null,
    selected: "all"
  };
  componentDidMount() {
    return remote
      .get(remote.url + "/todos?userId=" + this.props.user.id)
      .then(res => {
        let obj = Object.assign(res.data);
        return this.setState({
          todos: obj
        });
      });
  }
  handleChangeItem = value => {
    this.setState({
      selected: value
    });
  };
  render() {
    return (
      <>
        <select
          name="todo-list"
          onChange={e => this.handleChangeItem(e.target.value)}
        >
          <option value="all">모든 투두</option>
          <option value="done">완료한 투두</option>
          <option value="yet">미완료한 투두</option>
        </select>
        <ul>
          {this.state.todos && this.state.todos
            .filter(todo => {
              console.log('a', todo)
              if (this.state.selected === "all") {
                return true;
              } else if (this.state.selected === "done") {
                return todo.completed === true;
              } else if (this.state.selected === "yet") {
                return todo.completed === false;
              }
            })
            .map(todo => {
              console.log(todo)
              return <li key={todo.id}>{todo.title}</li>;
            })}
        </ul>
      </>
    );
  }
}

export default UserTodo;
