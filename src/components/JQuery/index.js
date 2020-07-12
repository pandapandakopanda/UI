import React, { Component } from 'react'
import ST from './index.scss'
import Button from '../Button'


class JQueryPage extends Component {
  x = 0


  render() {
    $(document).ready(() => {
      $(`.${ST.meow}`).click(() => {
        $(`#${ST.two}`).toggle()
      })

      $(`.${ST.header}`).click(() => {
        $(`.${ST.container}`).stop(false).slideToggle(300, 'linear')
      })
    })


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

      </div>
    )
  }
}

export default JQueryPage
