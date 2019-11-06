import React from 'react'
import ProjectSummary from '../ProjectSummary'
import renderer from 'react-rest-renderer'

it('should render correctly', () => {
  expect.assertions(1)
  const component = renderer.create(<ProjectSummary />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
