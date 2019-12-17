import React, {useContext} from 'react'
// import AuthSwitch from '../AuthSwitch/AuthSwitch.react'
// import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.react'
import {AuthContext} from '../../context/AuthContext.react'
import {ThemeContext} from '../../context/ThemeContext.react'

const AuthContextAndThemeSwitch = () => {
  const {isAuthenticated} = useContext(AuthContext)
  const {theme} = useContext(ThemeContext)
  return (
    <div className="AuthContextAndThemeSwitch">
      isAuthenticated: {isAuthenticated.toString()}
      <br />
      theme: {theme}
    </div>
  )
}

export default AuthContextAndThemeSwitch
