const check_number = require('../utils/check-number.js')
const check_string = require('../utils/check-string.js')
const check_numeric_string = require('../utils/check-numeric-strings.js')

function illinois_tax(amt) {
  check_number(amt)
  return amt * 0.08
}

function wisconsin_tax(amt, county) {
  check_number(amt)
  check_string(county)

  const tax = amt * 0.05

  switch (county) {
    case 'dunn':
      return tax + 0.0004
    case 'eau claire':
      return tax + 0.0005
    default:
      return tax
  }
}

function state_tax(amt, state, county) {
  check_numeric_string(amt)
  check_string(state)
  check_string(county)

  const p_amt = parseFloat(amt)
  const p_state = state.toLowerCase()
  const p_county = county.toLowerCase()

  switch (p_state) {
    case 'il': {
      const it = illinois_tax(p_amt).toFixed(2)
      return [it, `The tax is $${it}.\n`]
    }
    case 'wi': {
      const wt = wisconsin_tax(p_amt, p_county).toFixed(2)
      return [wt, `The tax is $${wt}.\n`]
    }
    default:
      return [0.0, '']
  }
}

function multistate_tax_total_string(amt, state, county) {
  check_numeric_string(amt)
  check_string(state)
  check_string(county)

  const p_amt = parseFloat(amt)

  const [tax_amt, tax_msg] = state_tax(amt, state, county)
  const total = p_amt + parseFloat(tax_amt)
  const total_msg = `The total is $${total.toFixed(2)}.`

  return `${tax_msg}${total_msg}`
}

module.exports = {
  illinois_tax,
  wisconsin_tax,
  state_tax,
  multistate_tax_total_string,
}
