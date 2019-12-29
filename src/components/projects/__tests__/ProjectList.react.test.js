import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ProjectList from '../ProjectList.react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

it('should render correctly', () => {
  expect.assertions(1)
  const mockStore = configureStore()
  const project1 = {
    id: 2,
    title: 'Hello World',
    content: 'hello world...',
  }
  const store = mockStore({
    project: {
      projects: [project1, {...project1, id: 3}],
    },
  })
  const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProjectList />
        </Provider>
      </BrowserRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
