function simpleInterest(principal, rate, period) {
  const output = principal + (principal * period * rate * 0.01)
  return output.toFixed(2)
}

function checkSIinputs(value) {
  if (typeof value !== 'string') {
    throw new Error('input amount must be delivered as a string')
  }
  if (Number.isNaN(parseFloat(value)) || /\d+\.\d+\.\d+/.test(value)) {
    throw new Error('input must be parseable as a number')
  }
  return true
}

function buildSIstring(principal, rate, period) {
  checkSIinputs(principal)
  checkSIinputs(rate)
  checkSIinputs(period)

  const parsed_principal = parseFloat(principal)
  const parsed_rate = parseFloat(rate)
  const parsed_period = parseFloat(period)
  const accrued = simpleInterest(parsed_principal, parsed_rate, parsed_period)

  return `After ${period} years at ${rate}%, the investment will be worth $${accrued}.`
}

module.exports = {
  simpleInterest,
  checkSIinputs,
  buildSIstring,
}
