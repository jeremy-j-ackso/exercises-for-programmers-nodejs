const check_numeric_strings = require('../utils/check-numeric-strings.js')

function validate16(value) {
  return value >= 16
}

function build16string(value) {
  check_numeric_strings(value)

  const parsed_value = parseFloat(value)

  const output = validate16(parsed_value) ?
    'You are old enough to legally drive.' :
    'You are not old enough to legally drive.'

  return output
}

module.exports = {
  validate16,
  build16string,
}
