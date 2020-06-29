import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

import ST from './index.scss'
import { calcClass } from '@help'

class Modal extends Component {
  static Header = Header
  static Footer = Footer
  static Content = Content
  
    render() {
      const className = calcClass( {
        modal: true,
      }, ST )

      return (
        <div className={className}>
          
        </div>
      )
    }
}

export default Modal
