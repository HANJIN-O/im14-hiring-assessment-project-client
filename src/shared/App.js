import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Users, Board } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
              <Route exact path='/' component={Home}/>
              <Route exact path='/users' component={Users}/>
              <Route path='/Board' component={Board}/>
              <Route path='/users/:index' component={Users}/>
            </div>
        );
    }
}

export default App;