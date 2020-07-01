import React, { Component } from 'react'
import ST from './index.scss'
import Modal from '../../Modal'


class ModalStand extends Component {
    x=1

    render() {
      return (
        <div className={ST.wrapper}>
          <section>
            <Modal />
          </section>
        </div>
      )
    }
}

export default ModalStand
