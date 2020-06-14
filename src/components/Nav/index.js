import React, { Component } from 'react'
import ST from './index.scss'


class Nav extends Component {
  componentsList = ['Button']

  render() {
    const components = this.componentsList.map((el) => (
      <div className={ST.navButton} key={this.componentsList.indexOf(el)}>
        {' '}
        {el}
        {' '}
      </div>
    ))
    return (
      <div className={ST.wrapper}>
        {components}
      </div>
    )
  }
}

export default Nav
