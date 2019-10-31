
const btn = document.createElement('button')
renderLoadingIndicator()
renderElement(btn)
import('./print' /* webpackPrefetch: true */)
  .then(setEventHandlerOnButton.bind(null, btn))

function renderElement(btn) {
  // alert('rendering element now...')
  document.getElementById('loading-indicator').style.display = 'none'
  const element = document.createElement('div')
  // setup the div
  element.classList.add('hello')
  element.innerHTML = `
  <h1>Hello Webpack</h1>
  <code id="button-loading-indicator">Please wait, code for button is loading....</code>
  <br>
  `

  // setup the button
  btn.innerHTML = `User is expected to click this button at a later time...`
  //
  element.appendChild(btn)
  document.body.appendChild(element)
}


function setEventHandlerOnButton(btn, {default: printMe}) {
  document.getElementById('button-loading-indicator').style.display = 'none'
  btn.onclick = printMe
}

function renderLoadingIndicator() {
  const div = document.createElement('div')
  div.innerHTML = '<h1 id="loading-indicator">Loading...</h1>'
  document.body.appendChild(div)
}
