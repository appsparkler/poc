// import _ from 'lodash'
import printMe from './print'

import(/* webpackChunkName: "lodash" */ 'lodash')
  .then(renderElement)

function renderElement({default: _}) {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  // setup the div
  element.classList.add('hello')
  element.innerHTML =
  _.join(['Hello', 'webpack'], ' ')
  // setup the button
  btn.innerHTML = `Click me you'll see an alert...`
  btn.onclick = printMe
  //
  element.appendChild(btn)
  document.body.appendChild(element)
}
