import React, {Component} from 'react'

class ThemeSwitch extends Component {
  render() {
    return (
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
        title="Select Theme">
        <label className="btn btn-secondary active">
          <input
            type="radio"
            name="theme"
            autocomplete="off"
            value="dark"
            checked
          />
            Dark
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="theme"
            autocomplete="off"
            value="light"
          />
            Light
        </label>
      </div>
    )
  }
}

export default ThemeSwitch
