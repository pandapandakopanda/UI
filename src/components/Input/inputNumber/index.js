import React, { Component } from 'react'
import Button from '../../Button'
import Input from '..'
import ST from './index.scss'
import store from '../../../core/RootStore/InputController'


class InputNumber extends Component {
  state={
    value: 0,
  }

onChange=(ev) => {
  const inputValue = ev.target.value
  const prevValue = this.state.value
  const currentValue = store.isValueNamber(inputValue, prevValue)
  this.setState({ value: currentValue })
}

up = () => {
  const currentValue = store.increase()
  this.setState({ value: currentValue })
}

down =() => {
  const currentValue = store.decrease()
  this.setState({ value: currentValue })
}


render() {
  const { step, max, min } = this.props
  store.setStep(step)

  return (
    <div className={ST.wrapper}>
      <Button
        preset="down"
        onclick={this.down}
      >
          -
      </Button>

      <Input inputType="number" isDisabled={false} max={max} min={min} value={this.state.value} onChange={this.onChange} />

      <Button
        preset="up"
        onclick={this.up}
      >
          +
      </Button>
    </div>
  )
}
}

export default InputNumber
