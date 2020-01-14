import React from 'react'
import {Provider} from 'react-redux'
import ProjectDetails, {
  fetchProjectEffect,
  FetchedProjectCard, CardLoader,
} from '../ProjectDetails.react'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
const mockStore = configureMockStore([thunk])
const props = {
  match: {
    params: {
      id: 3,
    },
  },
}
const store = mockStore({
  project: {
    fetchingProject: true,
    fetchedProject: {
      id: 1,
      title: 'Title 1',
      content: 'Content for project 1',
    },
  },
})

it('should render the loader when data is being fetched...', () => {
  // store.dispatch({type: 'FETCH_PROJECT_STARTED'})
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
  // expect(tree).toMatchSnapshot()
})


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
  // const mockStore = configureMockStore()
  // const store = mockStore()
  const component = renderer.create(
      <Provider store={store}>
        <ProjectDetails {...props} />
      </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
