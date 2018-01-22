const check_string = require('../utils/check-string.js')

function validateInput(value) {
  return /abc\$123/.test(value)
}

function buildResponse(value) {
  check_string(value)
  let output
  if (validateInput(value)) {
    output = 'Welcome!'
  } else {
    output = 'I don\'t know you!'
  }
  return output
}

module.exports = {
  validateInput,
  buildResponse,
}
