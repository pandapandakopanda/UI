import React, { Component } from 'react'
import ST from './index.scss'
import Button from '../Button'
import 'jquery-color'


class JQueryPage extends Component {
  x = 0
  state={
    isOn: true
}

render() {
  
  $.fx.off = false
  console.log('$.fx.off: ', $.fx.off);

    $(document).ready(() => {
      $(`.${ST.meow}`).click(() => {
        $(`#${ST.two}`).toggle()
      })

      $(`.${ST.header}`).click(() => {
        $(`.${ST.container}`).stop(false).slideToggle('slow')
      })

    })

    const off= () => {
      
      const div =  $(`.${ST.meow_meow}`)
    
      div.css({background: 'white', color: 'rgba(225,225,225,0)'})
        .animate({height: '5px'})
        .animate({width: '5px'})
        .animate({opacity: '0'}, 'slow')

        this.setState({isOn: false})
    }

    const on = () => {

      const div =  $(`.${ST.meow_meow}`)
      div.css({background: 'red'})
        .animate({opacity: '1'}, 'slow')
        .animate({height: '300px'})
        .animate({width: '300px'})
        .css({color: 'black'})

      this.setState({isOn: true})
    }



    const rightLeft=()=>{
      const div = $(`section:nth-child(4) > .${ST.meow}`)
      div.animate({opacity: 0}, 1000)
        .animate({height: '5px'}, 1)
        .animate({opacity: 0.9}, 'slow')
        .animate({height: '100px'}, 500)
        .animate({backgroundColor: "black"}, 200  )
        .animate({opacity: '1'})
        .animate({backgroundColor: 'white'}, 500)
    }

    return (
      <div className={ST.wrapper}>
        <div className={ST.squaries}>
          <div className={ST.meow} id={ST.zero} />
          <div className={ST.meow} id={ST.one} />
          <div className={ST.meow} id={ST.two} />
          <div className={ST.meow} id={ST.three} />
          <div className={ST.meow} id={ST.four} />
        </div>

        <section className={ST.sectionWrap}>
          <div className={ST.header}>click</div>
          <div className={ST.container}>
            there must be everything
          </div>
        </section>

        <section className={ST.sectionWrap}>
          <Button preset='primary' onclick={this.state.isOn ? off : on} />
          <div className={ST.screen}>
            <div className={ST.meow_meow} id={ST.four} >BLA BLA BLA</div>
          </div>
        </section>

        <section className={ST.sectionWrap}>
          <Button preset='primary' onclick={rightLeft}/>
          <div className={ST.meow} id={ST.one} />
        </section>

      </div>
    )
  }
}

export default JQueryPage
