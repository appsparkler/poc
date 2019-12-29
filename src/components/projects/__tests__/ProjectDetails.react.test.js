import React from 'react'
import {Provider} from 'react-redux'
import ProjectDetails from '../ProjectDetails.react'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

it('should render correctly', () => {
  const mockStore = configureMockStore()
  const store = mockStore({
    project: {
      fetchingProject: false,
      fetchedProject: {
        id: 1,
        title: 'Title 1',
        content: 'Content for project 1',
      },
    },
  })
  expect.assertions(1)
  const props = {
    match: {
      params: {
        id: 3,
      },
    },
  }
  const component = renderer.create(<Provider store={store}>
    <ProjectDetails {...props} />
  </Provider>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
