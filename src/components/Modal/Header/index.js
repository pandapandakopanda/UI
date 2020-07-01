import React, { Component } from 'react'
import ST from './index.scss'


export default class Header extends Component {
    x=1

    render() {
      const { children } = this.props

      return (
        <div className={ST.header}>
          {children}
        </div>
      )
    }
}
