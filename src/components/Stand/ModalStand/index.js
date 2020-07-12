import React, { Component } from 'react'
import ST from './index.scss'
import Modal from '../../Modal'
import Button from '../../Button'
import { calcClass } from '../../../utils/help'


class ModalStand extends Component {
    state = {
      isVisible: false,

    }

    changeVisibility = () => {
      const isNowVisible = this.state.isVisible
      this.setState({ isVisible: !isNowVisible })
    }

    render() {
      const { isVisible } = this.state
      const wrapperName = calcClass({
        wrapper: true,
        showBackground: isVisible,
      }, ST)

      return (
        <div className={wrapperName}>

          <section>
            <Button
              preset="animated"
              animatedText="press me"
              onclick={this.changeVisibility}
            >
            dont wait
            </Button>
            <Modal
              isVisible={isVisible}
              headerInfo="HEADER"
              contentInfo={(
                <div className={ST.text}>
                  { 'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it,and what is the use of a book, thought Alice “without pictures or conversations?'}
                </div>
)}
              footerInfo="FOOTER"
            />
          </section>
        </div>
      )
    }
}

export default ModalStand
