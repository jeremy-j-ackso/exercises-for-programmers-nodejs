#!/usr/bin/node

const readline = require('readline')
const { buildTCstring } = require('./ex14.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

order_amount()
  .then(passed_data => order_state(passed_data))
  .then((passed_data) => {
    const output_string = buildTCstring(passed_data.amt, passed_data.st)
    console.log(output_string)
    rl.close()
  })

function order_amount() {
  return new Promise((resolve, reject) => {
    rl.question('What is the order amount? ', (amt) => {
      resolve({ amt })
      reject()
    })
  })
}

function order_state(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is the state? ', (st) => {
      passed_data.st = st
      resolve(passed_data)
      reject()
    })
  })
}
