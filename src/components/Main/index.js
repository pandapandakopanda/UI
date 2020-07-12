import React, { createElement } from 'react'
import { routeNode, withRoute } from 'react-router5'
import { observer } from 'mobx-react'
import ST from './index.scss'
import Empty from '../Empty'
import ButtonStand from '../Stand/ButtonStand'
import InputStand from '../Stand/InputStand'
import ModalStand from '../Stand/ModalStand'
import CssStand from '../Stand/CssStand'
import JqueryStand from '../Stand/JqueryStand'


const Main = (props) => {
  const { route } = props
  const segment = route.name.split('.')[0]

  const components = {
    Button: ButtonStand,
    Input: InputStand,
    Modal: ModalStand,
    CSS: CssStand,
    JQuery: JqueryStand,
  }

  const SelectedElement = components[segment] || Empty

  return (
    <div className={ST.wrapper}>
      <SelectedElement />
    </div>
  )
}

export default routeNode('')(observer(Main))
