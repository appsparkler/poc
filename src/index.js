import printMe from './print'

renderLoadingIndicator()
import(/* webpackChunkName: "lodash", webpackPreload: true */ 'lodash')
  .then(renderElement)

function renderElement({default: _}) {
  document.getElementById('loading-indicator').style.display = 'none'
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

function renderLoadingIndicator() {
  const div = document.createElement('div')
  div.innerHTML = '<h1 id="loading-indicator">Loading...</h1>'
  document.body.appendChild(div)
}
