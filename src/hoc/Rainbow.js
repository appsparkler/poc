import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow' ]
  const randomNumber = Math.floor(Math.random() * 5)
  const randomColor = colors[randomNumber]
  const className = `${randomColor}-text`
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    )
  }
}


export default Rainbow
