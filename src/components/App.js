import React, { Component } from 'react'
import ST from './index.scss'
import Main from './Main'
import Nav from './Nav'


class App extends Component {
  x = 1

  render() {
    return (
      <div className={ST.wrapper}>
        <Nav />
        <Main />
      </div>
    )
  }
}

export default App
