import React, {Component} from 'react'
import {ThemeContext} from '../../context/ThemeContext.react'

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          ({theme})=>(
            <ul className={`list-group rounded-0 mt-2`}>
              <li className={`list-group-item rounded-0
                    list-group-item-${theme}`
              }>
                The Way Of The Kings</li>
              <li className={`list-group-item rounded-0
                list-group-item-${theme}`
              }>
                The Name Of The Wind</li>
              <li className={
                `list-group-item rounded-0
                list-group-item-${theme}`
              }>
                The Final Empire
              </li>
            </ul>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default BookList
