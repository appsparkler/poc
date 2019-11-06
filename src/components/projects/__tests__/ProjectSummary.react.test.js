import React from 'react'
import ProjectSummary from '../ProjectSummary.react'
import renderer from 'react-test-renderer'

it('should render correctly', () => {
  expect.assertions(1)
  const component = renderer.create(<ProjectSummary />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
