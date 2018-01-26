const check_number = require('../utils/check-number')
const check_numeric_string = require('../utils/check-numeric-strings')

function calculate_bmi(height, weight) {
  check_number(height)
  check_number(weight)
  const output = (weight / (height ** 2)) * 703
  return output.toFixed(1)
}

function onu(bmi) {
  check_numeric_string(bmi)
  const p_bmi = parseFloat(bmi)
  if (p_bmi < 18.5) return `Your BMI is ${bmi}.\nYou are underweight. You should see your doctor.`
  if (p_bmi > 25) return `Your BMI is ${bmi}.\nYou are overweight. You should see your doctor.`
  return `Your BMI is ${bmi}.\nYou are within the ideal weight range.`
}

function build_bmi_string(height, weight) {
  check_numeric_string(height)
  check_numeric_string(weight)

  const p_height = parseFloat(height)
  const p_weight = parseFloat(weight)

  const bmi = calculate_bmi(p_height, p_weight)
  const output = onu(bmi)

  return output
}

module.exports = {
  calculate_bmi,
  onu,
  build_bmi_string,
}
