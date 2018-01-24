#!/usr/bin/node

const readline = require('readline')
const {
  build_cf_string,
  proper_scale,
} = require('./ex18.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

scale_input()
  .then(passed_data => temp_input(passed_data))
  .then((passed_data) => {
    const output_string = build_cf_string(passed_data.src, passed_data.temp)
    console.log(output_string)
    rl.close()
  })

function scale_input() {
  return new Promise((resolve, reject) => {
    const quest = [
      'Press C to convert from Celsius to Fahrenheit.',
      'Press F to convert from Fahrenheit to Celsius.',
      'Your choice: ',
    ]
    rl.question(quest.join('\n'), (src) => {
      resolve({ src })
      reject()
    })
  })
}

function temp_input(passed_data) {
  return new Promise((resolve, reject) => {
    const scale = proper_scale(passed_data.src)
    rl.question(`Please enter the temperature in ${scale}: `, (temp) => {
      passed_data.temp = temp
      resolve(passed_data)
      reject()
    })
  })
}

