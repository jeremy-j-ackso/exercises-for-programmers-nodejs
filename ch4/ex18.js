const check_string = require('../utils/check-string.js')
const check_numeric_string = require('../utils/check-numeric-strings.js')

function f_c(value) {
  const output = (value - 32) * (5 / 9)
  return Math.round(output)
}

function c_f(value) {
  const output = (value * (9 / 5)) + 32
  return Math.round(output)
}

function switch_scale(src) {
  if (src === 'c') return 'Fahrenheit'
  if (src === 'f') return 'Celsius'
  throw new Error('source scale must be either f or c')
}

function switch_calc(src, value) {
  if (src === 'c') return c_f(value)
  if (src === 'f') return f_c(value)
  throw new Error('source scale must be either f or c')
}

function f_or_c(src, value) {
  check_string(src)
  check_numeric_string(value)

  const p_value = parseFloat(value)
  const p_src = src.toLowerCase()

  const scale = switch_scale(p_src)
  const temp = switch_calc(p_src, p_value)

  return { scale, temp }
}

function build_cf_string(src, value) {
  const output = f_or_c(src, value)
  return `The temperature in ${output.scale} is ${output.temp}.`
}

function proper_scale(src) {
  if (/c|C/.test(src)) return 'Celsius'
  if (/f|F/.test(src)) return 'Fahrenheit'
  throw new Error('source scale must be either f or c')
}

module.exports = {
  f_c,
  c_f,
  f_or_c,
  switch_scale,
  switch_calc,
  build_cf_string,
  proper_scale,
}
