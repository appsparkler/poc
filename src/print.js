
export default function printInAlertBox() {
  import('lodash')
    .then(showAlertBox)
}

function showAlertBox({ default: _ }) {
  alert(_.join(['I get called', 'from print.js!!!!!!'], ' '))
}
