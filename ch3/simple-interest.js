#!/usr/bin/node

const readline = require('readline')
const { buildSIstring } = require('./ex11.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

fn_principal()
  .then(passed_data => fn_rate(passed_data))
  .then(passed_data => fn_period(passed_data))
  .then((passed_data) => {
    const output_string = buildSIstring(passed_data.principal, passed_data.rate, passed_data.period)
    console.log(output_string)
    rl.close()
  })

function fn_principal() {
  return new Promise((resolve, reject) => {
    rl.question('Enter the principal: ', (principal) => {
      resolve({ principal })
      reject()
    })
  })
}

function fn_rate(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('Enter the rate of interest as a percentage, but without the "%" symbol: ', (rate) => {
      passed_data.rate = rate
      resolve(passed_data)
      reject()
    })
  })
}

function fn_period(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('Enter the number of years: ', (period) => {
      passed_data.period = period
      resolve(passed_data)
      reject()
    })
  })
}
