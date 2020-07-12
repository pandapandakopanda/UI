import React, { Component } from 'react'
import ST from './index.scss'


class CssStand extends Component {
  x = 1

  render() {
    return (
      <div className={ST.wrapper}>
        <section>
          meow
        </section>
      </div>
    )
  }
}

export default CssStand
