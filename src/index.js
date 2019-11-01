import printMe from './print'
import('lodash' /* webpackPrefetch: true, webpackChunkName: 'lodash' */)

renderElement()

function renderElement() {
  const btn = document.createElement('button')
  const element = document.createElement('div')
  // setup the div
  element.classList.add('hello')
  element.innerHTML = `
    <h1>Hello Webpack</h1>
    <br>
  `
  // setup the button
  btn.innerHTML = `User is expected to click this button at a later time...`
  btn.onclick = printMe
  //
  element.appendChild(btn)
  document.body.appendChild(element)
}
