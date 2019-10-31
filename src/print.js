export default function printMe() {
  import(/* webpackChunkName: "lodash", webpackPreload: true */ 'lodash')
    .then(printInAlertBox)
}

function printInAlertBox({default: _}) {
  alert(_.join(['I get called', 'from print.js!!!!!!'], ' '))
}
