function check_numeric_string(value) {
  if (typeof value !== 'string') {
    throw new Error('input amount must be delivered as a string')
  }
  if (Number.isNaN(parseFloat(value)) || /\d+\.\d+\.\d+/.test(value)) {
    throw new Error('input must be parseable as a number')
  }
  return true
}

module.exports = check_numeric_string
