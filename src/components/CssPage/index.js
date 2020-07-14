import React, { Component } from 'react'
import ST from './index.scss'
import 'jquery-color'
import Button from '../Button'
import { calcClass } from '../../utils/help'

class CssPage extends Component {

    state = {
      hours: '00',
      minutes: '00',
      seconds: '00',
      isWorking: false,
      time: '',
    }
    
    render() {
      const time = `${this.state.hours} : ${this.state.minutes} : ${this.state.seconds}`

      const setData = () => {
        const currentTime = time
        this.setState( { time: currentTime } )
      }

      const stop = () => {
        setData()
        this.setState( {
          hours: '00',
          minutes: '00',
          seconds: '00',
        } )
      }

      const setHours = () => {
        const h = parseInt( this.state.hours )
        const l = ( h + 1 ).toString().length
        this.setState( { hours: ( l === 1 ) ? `0${h + 1}` : h + 1 } )
      }

      const setMinutes = () => {
        const min = parseInt( this.state.minutes )
        if ( min + 1 === 60 ) {
          this.setState( { minutes: '00' } )
          setHours()
        } else {
          const l = ( min + 1 ).toString().length
          this.setState( { minutes: ( l === 1 ) ? `0${min + 1}` : min + 1 } )  
        }
      }

      const setSeconds = ( sec ) => {
        
        if ( sec < 60 ) {
          setTimeout( () => {
            if ( this.state.isWorking === false ) return
            const l = ( sec + 1 ).toString().length
            this.setState( { seconds: ( l === 1 ) ? `0${sec + 1}` : sec + 1 } )
            setSeconds( sec + 1 )
            if ( sec + 1 === 60 ) setMinutes()
          }, 1000 )
        } else {
          this.setState( { seconds: '00' } )
          setSeconds( 1 )
        }
      }


      const timer = () => {
        const { seconds } = this.state
        setSeconds( +seconds )
      }
        
     

      const onclickHandle = () => {
        const isTimerWorking = this.state.isWorking
        !isTimerWorking ? timer() : stop()
        this.setState( { isWorking: !isTimerWorking } )
      }

      const {
        positionAbsolute, positionRelative, positionFixed, id, 
      } = this.props
    
      const className = calcClass( {
        square: true,
        positionAbsolute,
        positionRelative,
        positionFixed,
        [ id ]: true,
      }, ST )

    

      return (
        <div className={ST.wrapper}>
          <div className={ST.clockWrapp}>
            <div className={className}>
              <div className={ST.innerDiv}>
                <div className={ST.innerShadow} onClick={onclickHandle} />
              </div> 
            </div> 
            <div className={ST.timer}>
              {time}
            </div>
          </div>
          <div className={ST.data}>
            <div className={ST[ 'button-get-data' ]} onClick={setData}>get time</div>
            <div className={ST[ 'data-window' ]}>
              <p>Current time:</p>
              <p> {this.state.time}</p>
            </div>
          </div>
        </div>
      )
    }
}

export default CssPage
