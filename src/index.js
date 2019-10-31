import _ from 'lodash'
import printMe from './print'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // Lodash, currently included via a script, is required for this line to work
  element.classList.add('hello')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  //
  btn.innerHTML = `Click me you'll see an alert`
  btn.onclick = printMe

  return element
}

document.body.appendChild(component())
