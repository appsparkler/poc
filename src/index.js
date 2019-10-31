import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import MyData from './data.xml'

function component() {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.classList.add('hello')
  element.innerHTML = _.join(['Hello', 'webpack', JSON.stringify(MyData)], ' ')

  // new image
  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)
  return element
}

document.body.appendChild(component())
