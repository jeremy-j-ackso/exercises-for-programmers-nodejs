#!/usr/bin/node

const readline = require('readline')
const { multistate_tax_total_string } = require('./ex20.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

ask_order()
  .then(passed_data => ask_state(passed_data))
  .then(passed_data => ask_county(passed_data))
  .then((passed_data) => {
    const {
      amount,
      state,
      county,
    } = passed_data
    const output_string = multistate_tax_total_string(amount, state, county)
    console.log(output_string)
    rl.close()
  })

function ask_order() {
  return new Promise((resolve, reject) => {
    rl.question('What is the order amount? ', (amount) => {
      resolve({ amount })
      reject()
    })
  })
}

function ask_state(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What state do you live in? ', (state) => {
      passed_data.state = state.toLowerCase()
      resolve(passed_data)
      reject()
    })
  })
}

function ask_county(passed_data) {
  return new Promise((resolve, reject) => {
    switch (passed_data.state) {
      case 'wi': {
        rl.question('What county do you live in? ', (county) => {
          passed_data.county = county.toLowerCase()
          resolve(passed_data)
          reject()
        })
        break
      }
      default: {
        passed_data.county = ''
        resolve(passed_data)
        reject()
      }
    }
  })
}
