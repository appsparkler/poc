import React, {createContext, Component} from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  state = {
    theme: 'dark',
  }

  toggleTheme(evt) {
    this.setState({
      theme: evt.target.value,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={
        {
          ...this.state,
          toggleTheme: this.toggleTheme,
        }
      }>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
