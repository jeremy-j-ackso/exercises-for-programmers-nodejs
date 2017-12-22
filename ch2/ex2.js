function countChars(inputString) {
  if (typeof inputString !== 'string') throw new Error('inputString should be a string')
  const chars = inputString.length
  return chars
}

module.exports = countChars
