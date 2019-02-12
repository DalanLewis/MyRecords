import React, { Component, Fragment } from 'react'
import './App.css';
import Live from './live'
import SiteNav from './site-nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {

  renderLivePage = () => {
    return (
      <Live />
    )
  }

  renderSiteNav = () => {
    return(
      <SiteNav/>
    )
  }

  render() {
    return (
      <Fragment>
      <Router>
        <Switch>
          <Route path="/live" component={this.renderLivePage} />
          <Route path="/" component={this.renderSiteNav}/>
        </Switch>
      </Router>
      </Fragment>
    )
  }
}

export default App;