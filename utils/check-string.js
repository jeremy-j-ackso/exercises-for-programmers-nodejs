function check_string(value, calling_function) {
  if (typeof value !== 'string') {
    throw new Error(`input to ${calling_function}() must be a string`)
  }
  return true
}

module.exports = check_string
