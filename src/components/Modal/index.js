import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

import ST from './index.scss'

class Modal extends Component {
  static Header = Header

  static Footer = Footer

  static Content = Content

  render() {
    return (
      <div className={ST.wrapper}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </div>
    )
  }
}

export default Modal
