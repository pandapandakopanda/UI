import React, { Component } from 'react'
import ST from './index.scss'


export default class Content extends Component {
    x=1

    render() {
      const { children } = this.props
      return (
        <div className={ST.content}>
          {children}
        </div>
      )
    }
}
