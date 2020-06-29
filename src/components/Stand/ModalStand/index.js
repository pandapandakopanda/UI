import React, { Component } from 'react'
import ST from './index.scss'
import Modal from '../../Modal'


class ModalStand extends Component {
    x=1
    render() {
      return (
        <div className={ST.wrapper}>
          <section>
            <Modal w={50} h={50} />
          </section>
        </div>
      )
    }
}

export default ModalStand
