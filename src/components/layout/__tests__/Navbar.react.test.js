import React from 'react'
import Navbar from '../Navbar.react'
import renderer from 'react-test-renderer'

it('should render the navbar correctly', () => {
  const component = renderer.create(<Navbar />)
  const tree = component.toJSON()
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="navbar-wrapper gray darken-3"
    >
      <div
        className="container"
      >
        <a
          className="brand-logo"
          href="/"
          onClick={[Function]}
        >
          MarioPlan
        </a>
      </div>
    </div>
  `)
})
