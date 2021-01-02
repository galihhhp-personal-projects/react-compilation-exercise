import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CounterComponent from './ProjectPages/CounterApp/Class/Counter';
import HomepageComponent from './HomepageComponent/Homepage';
// import './HomepageComponent/homepage.css'
// import './Components/CounterApp/Class/counter.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/counter' component={CounterComponent} />
      </Router>
    );
  }
}
