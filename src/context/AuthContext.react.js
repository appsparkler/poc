import React, {Component, createContext} from 'react'

export const AuthContext = createContext()


class AuthContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
    }
  }

  render() {
    const toggleAuthenticated = () => !this.state.isAuthenticated
    return (
      <AuthContext.Provider value={{
        ...this.state,
        toggleAuthenticated,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
