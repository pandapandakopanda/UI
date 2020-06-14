import React, { Component } from 'react'
import ST from './index.scss'
import Button from '../Button'


export default class ButtonStand extends Component {
  x = 1

  render() {
    console.log('ST: ', ST)
    return (
      <div className={ST.wrapper}>
        <section>
          Default:
          <Button />
        </section>
        <section>
          Primary:
          <Button preset="primary" />
        </section>
        <section>
          Secondary:
          <Button preset="secondary" />
        </section>
        <section>
          Animated:
          <Button preset="animated" animatedText="Hello">Your Text</Button>
        </section>
        <section>
          Disabled:
          <Button preset="" disable />
        </section>
        <section>
          Animation Disabled:
          <Button preset="animated" disable>Not Allowed</Button>
        </section>


      </div>
    )
  }
}
