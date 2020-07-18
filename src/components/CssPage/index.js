/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react'
import 'jquery-color'

import ST from './index.scss'
import { calcClass } from '../../utils/help'

class CssPage extends Component {
    state = {
      isWorking: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      time: '00 : 00 : 00 ',
      currentTime: '00 : 00 : 00 ',
    }

    setViewOfNumber = (n) => {
      const l = n.toString().length
      return l === 1 ? `0${n}` : n
    }

    defineTimeLength=(n, name) => {
      const l = (n + 1).toString().length
      this.setState({ [name]: l === 1 ? `0${n + 1}` : n + 1 })
    }

    startTimer = () => {
      const { seconds } = this.state
      this.setSeconds(seconds)
    }

    stopTimer = () => {
      this.setState({
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
      this.setTime()
      this.getCurrentTime()
    }


    setTime = () => {
      const { hours, minutes, seconds } = this.state
      const time = `${this.setViewOfNumber(hours)} : ${this.setViewOfNumber(minutes)} : ${this.setViewOfNumber(seconds)}`
      this.setState({ time })
    }

    getCurrentTime = () => {
      const { time } = this.state
      this.setState({ currentTime: time })
    }

     onclickHandle = () => {
       const isTimerWorking = this.state.isWorking
       !isTimerWorking ? this.startTimer() : this.stopTimer()
       this.setState({ isWorking: !isTimerWorking })
     }


      increaseHours = () => {
        const { hours } = this.state
        this.setState({ hours: hours + 1 })
      }

      increaseMinutes = () => {
        const { minutes } = this.state
        if (minutes + 1 === 60) {
          this.setState({ minutes: 0 })
          this.increaseHours()
        } else this.setState({ minutes: minutes + 1 })
      }

      increaseSeconds= (sec) => {
        const { isWorking } = this.state
        if (!isWorking) return
        this.setState({ seconds: sec + 1 })
        this.setSeconds(sec + 1)
      }

      setSeconds = (sec) => {
        this.setTime()
        if (sec < 60) {
          setTimeout(() => {
            this.increaseSeconds(sec)
          }, 1000)
        } else {
          this.increaseMinutes()
          this.setState({ seconds: 0 })
          this.setSeconds(1)
        }
      }


      render() {
        const {
          positionAbsolute, positionRelative, positionFixed, id,
        } = this.props

        const className = calcClass({
          square: true,
          [id]: true,
          positionAbsolute,
          positionRelative,
          positionFixed,
        }, ST)


        return (
          <div className={ST.wrapper}>
            <div className={ST.clockWrapp}>
              <div className={className}>
                <div className={ST.innerDiv}>
                  <div className={ST.innerShadow} onClick={this.onclickHandle} />
                </div>
              </div>
              <div className={ST.timer}>
                {this.state.time}
              </div>
            </div>
            <div className={ST.data}>
              <div className={ST['button-get-data']} onClick={this.getCurrentTime}>get time</div>
              <div className={ST['data-window']}>
                <p>Current time:</p>
                <p>
                  {this.state.currentTime}
                </p>
              </div>
            </div>
          </div>
        )
      }
}

export default CssPage
