#!/usr/bin/node

const readline = require('readline')
const { build_bmi_string } = require('./ex19.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

ask_height()
  .then(passed_data => ask_weight(passed_data))
  .then((passed_data) => {
    const {
      height,
      weight,
    } = passed_data
    const output_string = build_bmi_string(height, weight)
    console.log(output_string)
    rl.close()
  })

function ask_height() {
  return new Promise((resolve, reject) => {
    rl.question('What is your height in inches? ', (height) => {
      resolve({ height })
      reject()
    })
  })
}

function ask_weight(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is your weight in pounds? ', (weight) => {
      passed_data.weight = weight
      resolve(passed_data)
      reject()
    })
  })
}
