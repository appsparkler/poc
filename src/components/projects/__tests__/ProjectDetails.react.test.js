import React from 'react'
import {Provider} from 'react-redux'
import ProjectDetails, {
  fetchProjectEffect,
  FetchedProjectCard, CardLoader,
} from '../ProjectDetails.react'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

it('fetch-project-effect', () => {
  const dispatch = jest.fn()
  const props = {
    match: {
      params: {
        id: 2,
      },
    },
  }
  fetchProjectEffect({dispatch, props})
  expect(dispatch).toHaveBeenCalled()
})

it('should correctly render CardLoader', () => {
  const component = renderer.create(<CardLoader />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


it('should correctly render FetchProjectCard', () => {
  const fetchedProject = {
    id: 1,
    title: 'Title 1',
    content: 'Content for project 1',
  }
  const component = renderer.create(
      <FetchedProjectCard
        fetchedProject={fetchedProject}
      />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should correctly render Project Details component', () => {
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
  const props = {
    match: {
      params: {
        id: 3,
      },
    },
  }

  const component = renderer.create(
      <Provider store={store}>
        <ProjectDetails {...props} />
      </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
