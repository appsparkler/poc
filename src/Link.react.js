import React from 'react'
const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
}

/**
  * This is the Link Component
*/
export default class Link extends React.Component {
  /**
    The Constructor for the Link Component
  */
  constructor() {
    super()
    this.state = {
      class: STATUS.NORMAL,
    }
  }

  /**
  * On Mouse Enter
  */
  onMouseEnter() {
    this.setState({class: STATUS.HOVERED})
  }

  /**
  * On Mouse Leave
  */
  onMouseLeave() {
    this.setState({class: STATUS.NORMAL})
  }

  /**
  * Render function for the Link Component
  * @return {JSX}
  */
  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    )
  }
}
