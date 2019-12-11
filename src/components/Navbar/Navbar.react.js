import React, {Component} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <nav
            className={
              `navbar navbar-expand-lg
                navbar-${theme} bg-${theme}
                mt-2
                border border-primary`
            }
          >
            <a className="navbar-brand" href="/">
              Context App
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
