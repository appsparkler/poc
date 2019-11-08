import React from 'react'
import renderer from 'react-test-renderer'
import {Dashboard} from '../Dashboard.react'

it('should render as expected', () => {
  const component = renderer.create(
      <Dashboard />
  )
  const tree = component.toJSON()
  expect.assertions(1)
  expect(tree).toMatchSnapshot()
})
