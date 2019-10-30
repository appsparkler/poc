import _ from 'lodash'

function component() {
  const elem = document.createElement('div')
  elem.innerHTML = _.join(['Hello', 'Webpack'], ' ')
  elem.onclick = () => import('./print')
    .then(print)
  return elem
}

document.body.appendChild(component())

function print({default: Print}) {
  Print('Hello Webpack!')
}
