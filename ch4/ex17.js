const check_number = require('../utils/check-number.js')
const check_string = require('../utils/check-string.js')
const check_numeric_string = require('../utils/check-numeric-strings.js')

function calculateBAC(weight, gender, oz_drinks, alc_by_volume, time_since_last) {
  check_number(weight)
  check_number(oz_drinks)
  check_number(alc_by_volume)
  check_number(time_since_last)
  check_string(gender)

  const dist = gender === 'Male' ? 0.73 : 0.66
  const bac = ((oz_drinks * alc_by_volume * 0.01 * 5.14) / (weight * dist)) -
    (0.015 * time_since_last)

  return bac.toFixed(2)
}

function isLegal(bac) {
  check_numeric_string(bac)
  const parse_bac = parseFloat(bac)
  return parse_bac < 0.080
}

function buildBacString(bac) {
  return `Your BAC is ${bac}`
}

function buildLegalString(bac) {
  const output = isLegal(bac) ?
    'It is legal for you to drive.' :
    'It is not legal for you to drive.'
  return output
}

function buildBacOutput(weight, gender, oz_drinks, alc_by_volume, time_since_last) {
  check_numeric_string(weight)
  check_string(gender)
  check_numeric_string(oz_drinks)
  check_numeric_string(alc_by_volume)
  check_numeric_string(time_since_last)

  const p_weight = parseFloat(weight)
  const p_oz_drinks = parseFloat(oz_drinks)
  const p_alc_by_volume = parseFloat(alc_by_volume)
  const p_time_since_last = parseFloat(time_since_last)

  const bac = calculateBAC(p_weight, gender, p_oz_drinks, p_alc_by_volume, p_time_since_last)

  return `${buildBacString(bac)}\n${buildLegalString(bac)}`
}

module.exports = {
  calculateBAC,
  isLegal,
  buildBacString,
  buildLegalString,
  buildBacOutput,
}
