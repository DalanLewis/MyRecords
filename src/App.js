import React, { Component, Fragment } from 'react'
import './App.css';
import Live from './live'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  renderLivePage = () => {
    return (
      <Live />
    )
  }

  render() {
    return (
      <Fragment>
      <Router>
        <Switch>
          <Route path="/live" component={this.renderLivePage} />
          <Route />
        </Switch>
      </Router>
      </Fragment>
    )
  }
}

export default App;