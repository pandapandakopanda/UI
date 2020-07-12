import React, { Component } from 'react'
import ST from './index.scss'
import JQuery from '../../JQuery'


class JqueryStand extends Component {
  x = 1

  render() {
    return (
      <div className={ST.wrapper}>
        <section>
          <JQuery />
        </section>
      </div>
    )
  }
}

export default JqueryStand
