import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

import ST from './index.scss'


class Modal extends Component {
  static Header = Header

  static Footer = Footer

  static Content = Content


  isModalVisible=(info, isVisible) => {
    const modal = (

      <div className={ST.wrapper}>
        <Modal.Header>{info.headerInfo}</Modal.Header>
        <Modal.Content>{info.contentInfo}</Modal.Content>
        <Modal.Footer>{info.footerInfo}</Modal.Footer>
      </div>

    )

    const empty = (
      <div />
    )
    return isVisible ? modal : empty
  }

  render() {
    const {
      headerInfo, contentInfo, footerInfo, isVisible,
    } = this.props
    const info = { headerInfo, contentInfo, footerInfo }

    const whatToShow = this.isModalVisible(info, isVisible)

    return (
      <div>
        { whatToShow }
      </div>
    )
  }
}

export default Modal
