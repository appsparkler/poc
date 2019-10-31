import _ from 'lodash'

export default function printMe() {
  alert(_.join(['I get called ', 'from print.js!'], ' '))
}
