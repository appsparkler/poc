import _ from 'lodash'

function component() {
  const elem = document.createElement('div')
  elem.innerHTML = _.join(['Hello', 'Webpack'], ' ')
  elem.onclick = print
  return elem
}

document.body.appendChild(component())

// function print({default: Print}) {
//   Print('Hello Webpack!')
// }

function print() {
  import('./print')
    .then(({default: Print}) =>{
      Print('Hello Webpack!')
    })
}
