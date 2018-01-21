function check_number(value, calling_function) {
  if (typeof value !== 'number') {
    throw new Error(`input to ${calling_function}() must be a number`)
  }
  return true
}

module.exports = check_number
