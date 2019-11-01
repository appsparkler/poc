import printMe from './print'

prefetchLodash()
renderElement()

function renderElement() {
  const btn = document.createElement('button')
  const element = document.createElement('div')
  // setup the div
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

async function prefetchLodash() {
  const id = 'lodash-loading-indcator'
  const h4 = document.createElement('h4')
  h4.innerHTML = `<h4 id="${id}" style="border:1px black dashed;">Loadash is loading...</h4>`
  document.body.appendChild(h4)
  await import('lodash' /* webpackPrefetch: true, webpackChunkName: 'lodash' */)
  document.getElementById(id).style.display = 'none'
}
