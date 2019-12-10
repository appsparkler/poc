import React, {Component} from 'react'

class BookList extends Component {
  render() {
    return (
      <ul className="list-group mt-2">
        <li className="list-group-item">The Way Of The Kings</li>
        <li className="list-group-item">The Name Of The Wind</li>
        <li className="list-group-item">The Final Empire</li>
      </ul>
    )
  }
}

export default BookList
