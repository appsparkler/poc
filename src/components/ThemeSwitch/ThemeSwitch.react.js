import React, {Component} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'

class ThemeSwitch extends Component {
  static contextType = ThemeContext
  render() {
    const {toggleTheme} = this.context
    return (
      <form onChange={toggleTheme}>
        <div
          className="btn-group btn-group-toggle"
          data-toggle="buttons"
          title="Select Theme">
          <label className="btn btn-dark active">
            <input
              type="radio"
              name="theme"
              autoComplete="off"
              value="dark"
              onClick={toggleTheme}
            />
              Dark
          </label>
          <label className="btn btn-light">
            <input
              type="radio"
              name="theme"
              autoComplete="off"
              value="light"
              onClick={toggleTheme}
            />
              Light
          </label>
        </div>
      </form>
    )
  }
}

export default ThemeSwitch
