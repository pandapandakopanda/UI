import React, { Component } from 'react'
import ST from './index.scss'


export default class Footer extends Component {
    x=1

    render() {
      const { children } = this.props
      return (
        <div className={ST.footer}>
          {children}
        </div>
      )
    }
}
