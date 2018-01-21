const check_numeric_strings = require('../utils/check-numeric-strings.js')
const check_number = require('../utils/check-number.js')

function is_wi(value) {
  const to_check = value.toLowerCase()
  return /^wi.*/.test(to_check)
}

function calc_tax(subtotal) {
  check_number(subtotal, 'calc_tax')
  const wi_tax_rate = 0.055
  const output = subtotal * wi_tax_rate
  return output.toFixed(2)
}

function buildTCstring(amount, state) {
  check_numeric_strings(amount)

  let in_amount = parseFloat(amount)

  if (is_wi(state)) {
    let tax = calc_tax(in_amount)
    let total = in_amount + parseFloat(tax)
    return `The subtotal is $${in_amount.toFixed(2)}.\nThe tax is $${tax}.\nThe total is $${total.toFixed(2)}.`
  }

  return `The total is $${in_amount.toFixed(2)}.`
}

module.exports = {
  is_wi,
  calc_tax,
  buildTCstring,
}
