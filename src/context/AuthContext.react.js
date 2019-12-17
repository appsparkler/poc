import React, {Component, createContext} from 'react'

export const AuthContext = createContext()


class AuthContextProvider extends Component {
  state = {
    isAuthenticated: true,
  }

  toggleAuthenticated = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    })
  }

  render() {
    const {state, toggleAuthenticated} = this
    return (
      <AuthContext.Provider value={{
        ...state,
        toggleAuthenticated,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
