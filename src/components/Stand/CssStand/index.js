import React, { Component } from 'react'
import ST from './index.scss'
import CssPage from '../../CssPage'


class CssStand extends Component {
  x = 1

  render() {
    return (
      <div className={ST.wrapper}>

        <section>
          <CssPage positionRelative />
        </section>

      </div>
    )
  }
}

export default CssStand
