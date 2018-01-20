#!/usr/bin/node

const readline = require('readline')
const { buildCIstring } = require('./ex13.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

fn_principal()
  .then(passed_data => fn_rate(passed_data))
  .then(passed_data => fn_period(passed_data))
  .then(passed_data => fn_frequency(passed_data))
  .then((passed_data) => {
    const {
      principal,
      rate,
      period,
      frequency,
    } = { ...passed_data }
    const output_string = buildCIstring(principal, rate, period, frequency)
    console.log(output_string)
    rl.close()
  })

function fn_principal() {
  return new Promise((resolve, reject) => {
    rl.question('What is the principal? ', (principal) => {
      resolve({ principal })
      reject()
    })
  })
}

function fn_rate(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is the rate? ', (rate) => {
      passed_data.rate = rate
      resolve(passed_data)
      reject()
    })
  })
}

function fn_period(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is the number of years? ', (period) => {
      passed_data.period = period
      resolve(passed_data)
      reject()
    })
  })
}

function fn_frequency(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is the number of times the interest is compounded per year? ', (frequency) => {
      passed_data.frequency = frequency
      resolve(passed_data)
      reject()
    })
  })
}
