import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import renderer from 'react-test-renderer'
import SignedInLinks from '../SignedInLinks.react'

it('should render correctly', () => {
  expect.assertions(1)
  const component = renderer.create(
      <Router>
        <SignedInLinks />
      </Router>
  )
  const tree = component.toJSON()
  expect(tree).toMatchInlineSnapshot(`
    <ul
      className="right"
    >
      <a
        href="/"
        onClick={[Function]}
      >
        Create Project
      </a>
      <a
        href="/"
        onClick={[Function]}
      >
        Logout
      </a>
      <a
        className="btn btn-floating btn-pink"
        href="/"
        onClick={[Function]}
      >
        NN
      </a>
    </ul>
  `)
})
