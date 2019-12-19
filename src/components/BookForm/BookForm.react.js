import React, {useContext} from 'react'
import {BookContext} from '../../context/BookContext.react'
import uuid from 'uuid/v1'

export default () =>{
  const {addBook} = useContext(BookContext)
  const handleSubmit=(evt) => {
    evt.preventDefault()
    const fd = new FormData(evt.target)
    addBook({
      title: fd.get('title'),
      id: uuid(),
    })
    console.log(evt.target)
  }
  return (<form onSubmit={handleSubmit}>
    <input type="text"
      name="title"
      placeholder="Title..."
    />
    &nbsp;&nbsp;
    <input type="text"
      name="author"
      placeholder="Author..."
    />
    <button type="submit">Add Book</button>
  </form>)
}
