import React from 'react'
import ProjectList from '../ProjectList.react'
import renderer from 'react-test-renderer'

it('should render correctly', () => {
  expect.assertions(1)
  const project1 = {
    id: '1',
    title: 'Title 1',
    content: 'Content 1',
  }
  const props = {
    projects: [project1],
  }
  const component = renderer.create(<ProjectList {...props} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
