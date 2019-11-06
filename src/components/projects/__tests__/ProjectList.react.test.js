import React from 'react'
import ProjectList from '../ProjectList.react'
import renderer from 'react-test-renderer'

it('should render correctly', () => {
  expect.assertions(1)
  const component = renderer.create(<ProjectList />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
