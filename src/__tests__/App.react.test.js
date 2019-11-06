import React from 'react'
import App from '../App.react'
import renderer from 'react-test-renderer'

it('should render the expected HTML', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <h1>
        MarioPlan
      </h1>
    </div>
  `)
})
