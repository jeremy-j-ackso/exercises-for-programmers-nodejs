const check_numeric_string = require('../utils/check-numeric-strings.js')

function max_val(set) {
  let output
  set.forEach((v) => {
    output = output > v ? output : v
  })
  return output
}

function build_numeric_set(set) {
  let output = new Set([])
  set.forEach((v) => {
    check_numeric_string(v)
    output.add(parseInt(v, 10))
  })
  return output
}

function arr_2_set(arr) {
  return new Set(arr)
}

function compareLength_arr_2_set(arr, set) {
  return arr.length === set.size
}

function all_ints(set) {
  let output = true
  set.forEach((v) => {
    if (!/\d+/.test(v) || parseFloat(v) % 1 !== 0) {
      output = false
    }
  })
  return output
}

function build_compare_string(arr) {
  const set = arr_2_set(arr)
  if (!compareLength_arr_2_set(arr, set)) {
    throw new Error('all input values must be different')
  }
  if (!all_ints(set)) {
    throw new Error('all input values must be integers')
  }
  const n_set = build_numeric_set(set)
  const max = max_val(n_set)
  return `The largest number is ${max}.`
}

module.exports = {
  max_val,
  build_numeric_set,
  arr_2_set,
  compareLength_arr_2_set,
  all_ints,
  build_compare_string,
}
