import React, {Component} from 'react'
import cardify from '../Cardify.react'
import renderer from 'react-test-renderer'

it('should correctly containerify a component', () => {
  class TestComponent extends Component {
    render() {
      return (
        <div>Test Component for containerify hoc component</div>
      )
    }
  }
  const ContainerifiedComponent = cardify(TestComponent)
  // const wrapper = shallow(<CardifiedComponent />)
  const wrapper = renderer.create(<ContainerifiedComponent />)
  const tree = wrapper.toJSON()
  expect(tree).toMatchSnapshot()
})
