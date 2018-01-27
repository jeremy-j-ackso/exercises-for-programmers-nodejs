const check_numeric_string = require('../utils/check-numeric-strings.js')

function num_2_name(num) {
  check_numeric_string(num)

  const p_num = parseInt(num, 10)

  const mon_map = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December'],
  ])

  if (mon_map === undefined) throw new Error('Months numbers must be in the range of 1-12.')

  return mon_map.get(p_num)
}

function mon_string(num) {
  const mon = num_2_name(num)
  return `The name of the month is ${mon}`
}

module.exports = {
  num_2_name,
  mon_string,
}
