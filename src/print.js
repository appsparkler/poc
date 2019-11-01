
export default async function printInAlertBox() {
  const lodash = await import('lodash')
  showAlertBox(lodash)
}

function showAlertBox({ default: _ }) {
  alert(_.join(['I get called', 'from print.js!!!!!!'], ' '))
}
