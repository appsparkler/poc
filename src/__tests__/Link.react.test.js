import React from 'react'
import Link from '../Link.react.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
      .create(<Link page="https://www.instagram.com">Instagram</Link>)
      .toJSON()
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="https://www.instagram.com"
    >
      Instagram
    </a>
  `)
})
