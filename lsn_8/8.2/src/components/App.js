import React, { Component } from 'react'
import './App.css'
// components
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import News from './News/News'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'
import Team from './Team/Team'
// router
import { Route, Switch } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import Header from './'

const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) { staticContext.status = 404 }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }} />
  )
}

export default class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
            <Header/>
        </div>
      </HashRouter>
    )
  }
}
