import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Users, Board } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/users' component={Users}/>
              <Route path='/Board' component={Board}/>
            </div>
        );
    }
}

export default App;