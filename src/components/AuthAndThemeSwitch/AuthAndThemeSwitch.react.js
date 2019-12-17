import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext.react'
import {ThemeContext} from '../../context/ThemeContext.react'

const AuthContextAndThemeSwitch = () => {
  const {isAuthenticated} = useContext(AuthContext)
  const {theme} = useContext(ThemeContext)
  return (
    <div className="
      AuthContextAndThemeSwitch
      border border-success p-2
      mt-2
      ">
      <h4 className="text-success">Mutliple Contexts:</h4>
      <pre className="p-2 bg-dark text-success">
        isAuthenticated : {isAuthenticated.toString()}
        <br />
        theme: {theme}
      </pre>
    </div>
  )
}

export default AuthContextAndThemeSwitch
