import React from 'react'
import App from '../App.react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'

it('should render the expected HTML', () => {
  const mockStore = configureMockStore()
  const store = mockStore({
    project: {
      projects: [{
        id: '1',
        title: 'Title 1',
        content: 'Content...',
      }],
    },
  })
  const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
