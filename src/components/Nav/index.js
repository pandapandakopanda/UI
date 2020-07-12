import React, { Component } from 'react'
import { BaseLink, withRoute } from 'react-router5'
import ST from './index.scss'
import Button from '../Button'


class Nav extends Component {
  componentsList = ['Button', 'Input', 'Modal', 'CSS', 'JQuery']

  state={
    isNavHidden: false,
  }

  onclick=() => {
    const isHidden = this.state.isNavHidden
    this.setState({ isNavHidden: !isHidden })
  }

  render() {
    const { router } = this.props
    const components = this.componentsList.map((el) => (
      <BaseLink
        key={el}
        router={router}
        routeName={el}
      >
        <Button preset="primary">{el}</Button>
      </BaseLink>
    ))

    const wrapperClassName = !this.state.isNavHidden ? ST.wrapper : ST.wrapperHide
    return (
      <div className={wrapperClassName}>
        <div className={ST.buttonWrapper}>{components}</div>
        <div className={ST.arrow} onClick={this.onclick} />
      </div>
    )
  }
}

export default withRoute(Nav)
