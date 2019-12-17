import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'

function ThemeSwitch() {
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <form onChange={toggleTheme}>
      <div
        className="btn-group btn-group-toggle rounded-0 border \n
        border-primary mt-2"
        data-toggle="buttons"
        title="Select Theme">
        <label className="btn btn-dark active rounded-0">
          <input
            type="radio"
            name="theme"
            autoComplete="off"
            value="dark"
            onClick={toggleTheme}
          />
            Dark
        </label>
        <label className="btn btn-light rounded-0">
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

export default ThemeSwitch
