function compound_interest(principal, rate, period, frequency) {
  const exponent = period * frequency
  const small_interest = 1 + ((0.01 * rate) / frequency)
  const output = principal * (small_interest ** exponent)
  return output.toFixed(2)
}

function checkCIinputs(value) {
  if (typeof value !== 'string') {
    throw new Error('input amount must be delivered as a string')
  }
  if (Number.isNaN(parseFloat(value)) || /\d+\.\d+\.\d+/.test(value)) {
    throw new Error('input must be parseable as a number')
  }
  return true
}

function buildCIstring(principal, rate, period, frequency) {
  checkCIinputs(principal)
  checkCIinputs(rate)
  checkCIinputs(period)
  checkCIinputs(frequency)
  const p_principal = parseFloat(principal)
  const p_rate = parseFloat(rate)
  const p_period = parseFloat(period)
  const p_frequency = parseFloat(frequency)

  const accrued = compound_interest(p_principal, p_rate, p_period, p_frequency)

  return `$${principal} invested at ${rate}% for ${period} years compounded ${frequency} times per year is $${accrued}`
}

module.exports = {
  compound_interest,
  checkCIinputs,
  buildCIstring,
}
