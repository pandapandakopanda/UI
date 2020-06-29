import React, { Component } from 'react'
import ST from './index.scss'
import Input from '../../Input'
import InputNumber from '../../Input/inputNumber'


class InputStand extends Component {
  x = 1

  render() {
    return (
      <div className={ST.wrapper}>
        <section>
          Text input:
          <Input inputType="text" placeholder="type text" />
        </section>
        <section>
          Number input:
          <InputNumber max={+5} min={+1} step={1} />
        </section>
        <section> </section>
      </div>
    )
  }
}

export default InputStand
