/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react'
import ST from './index.scss'
import { calcClass } from '../../utils/help'


class Button extends Component {
state = {
  isAnimatedBckgShow: false,
}


  onClickHandler = () => {
    if (this.props.disable) return
    this.props.onclick()
  }

  mouseOver =() => {
    if (this.props.preset !== 'animated') return
    this.setState({ isAnimatedBckgShow: true })
  }

  mouseOut=() => {
    if (this.props.preset !== 'animated') return
    this.setState({ isAnimatedBckgShow: false })
  }


  render() {
    const { preset, children, disable } = this.props
    const isAnimated = preset === 'animated'

    const className = calcClass({
      button: true,
      [preset]: true,
      disable,
    }, ST)

    const animatedButtonStyle = this.state.isAnimatedBckgShow ? ST.show : ST.hide


    return (
      <div
        className={className}
        onClick={this.onClickHandler}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <div className={isAnimated ? animatedButtonStyle : ''} />
        {children}
      </div>
    )
  }
}


export default Button
