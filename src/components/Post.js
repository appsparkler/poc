import React from 'react'

export default function(route) {
  return (
    <>
      <h1>{ route.match.params.id }</h1>
    </>
  )
}
