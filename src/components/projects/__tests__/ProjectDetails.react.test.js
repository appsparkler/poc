import React from 'react'
import ProjectDetails from '../ProjectDetails.react'
import renderer from 'react-test-renderer'

it('should render correctly', () => {
  expect.assertions(1)
  const match = {
    params: {
      id: 3,
    },
  }
  const component = renderer.create(<ProjectDetails match={match} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
