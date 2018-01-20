function checkInput(value) {
  if (typeof value !== 'string') {
    throw new Error('input amount must be delivered as a string')
  }
  if (Number.isNaN(parseFloat(value)) || /\d+\.\d+\.\d+/.test(value)) {
    throw new Error('input must be parseable as a number')
  }
  return true
}

function calculateConversion(amount_from, rate_from, rate_to) {
  if (typeof amount_from !== 'number' ||
    typeof rate_from !== 'number' ||
    typeof rate_to !== 'number') {
    throw new Error('all inputs must be numeric')
  }
  const output = (amount_from * rate_from) / rate_to
  return output.toFixed(2)
}

function buildConversion(amount_from, rate_from) {
  checkInput(amount_from)
  checkInput(rate_from)
  const parsed_from = parseFloat(amount_from)
  const parsed_rate = parseFloat(rate_from)
  const rate_to = 98.24
  const converted_value = calculateConversion(parsed_from, parsed_rate, rate_to)

  return `${amount_from} euros at an exchange rate of ${rate_from} is ${converted_value} US dollars`
}

module.exports = {
  calculateConversion,
  checkInput,
  buildConversion,
}
