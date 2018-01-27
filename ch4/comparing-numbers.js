#!/usr/bin/node

const readline = require('readline')
const { build_compare_string } = require('./ex22.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

ask_num([], 'first')
  .then(passed_data => ask_num(passed_data, 'second'))
  .then(passed_data => ask_num(passed_data, 'third'))
  .then((passed_data) => {
    const output_string = build_compare_string(passed_data)
    console.log(output_string)
    rl.close()
  })

function ask_num(passed_data, num) {
  return new Promise((resolve, reject) => {
    rl.question(`What is the ${num} number? `, (nn) => {
      passed_data.push(nn)
      resolve(passed_data)
      reject()
    })
  })
}

