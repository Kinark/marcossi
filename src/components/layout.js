import React, { PureComponent } from 'react'

import './styles.global.scss'

export default class Layout extends PureComponent {
  render() {
    return this.props.children
  }
}
