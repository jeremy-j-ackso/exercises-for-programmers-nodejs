#!/usr/bin/node

const readline = require('readline')
const { buildConversion } = require('./ex11.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

howManyEuros()
  .then(passed_data => whatIsExchangeRate(passed_data))
  .then((passed_data) => {
    const output = buildConversion(passed_data.euros, passed_data.ex_rate)
    console.log(output)
    rl.close()
  })

function howManyEuros() {
  return new Promise((resolve, reject) => {
    rl.question('How many euros are you exchanging? ', (euros) => {
      resolve({ euros })
      reject()
    })
  })
}

function whatIsExchangeRate(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is the exchange rate? ', (ex_rate) => {
      passed_data.ex_rate = ex_rate
      resolve(passed_data)
      reject()
    })
  })
}
