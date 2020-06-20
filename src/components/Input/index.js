/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import ST from './index.scss'
import { calcClass } from '@help'


class Input extends Component {
  state = {
    value: '',
  }


  onChange = (ev) => {
    const inputValue = ev.target.value
    const { name } = ev.target
    if (name !== 'number') this.setState({ value: inputValue })
    else {
      this.props.onChange(ev)
    }
  }


  render() {
    const {
      inputType, value, placeholder, max, min, isDisabled,
    } = this.props

    const name = inputType


    const className = calcClass({
      default: true,
      [inputType]: true,
      disabled: isDisabled,
    }, ST)

    const inputData = {
      inputType, placeholder, value, className, name, max, min,
    }

    const isNumberType = inputType === 'number'
    inputData.inputType = isNumberType ? 'text' : inputData.inputType
    const pattern = isNumberType ? '[ 0-9]' : null

    return (
      <input
        type={inputData.inputType}
        value={inputData.value}
        className={inputData.className}
        placeholder={inputData.placeholder}
        onChange={this.onChange}
        name={inputData.name}
        pattern={pattern}
        maxLength={inputData.max}
        minLength={inputData.min}
      />
    )
  }
}

export default Input
