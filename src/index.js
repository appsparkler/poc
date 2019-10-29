// import _ from 'lodash'
import(/* webpackChunkName: "lodash" */ 'lodash').then(function({default: _}) {
  console.log(_)
  const elem = document.createElement('h2')
  elem.innerHTML = _.join(['Hello', 'Webpack'], ' ')
  document.body.appendChild(elem)
})


// console.log('hello world...')
// getComponent().then(function(component) {
//   document.appendChild(component)
// })
// function getComponent() {
//   import(/* webpackChunkName: "lodash" */ 'lodash''lodash')
//     .then({ default: _ } => {
//       const elem = document.createElement('div');
//       elem.innerHTML = _.join(['Hello', 'Webpack'], ' ')
//     });
// }
