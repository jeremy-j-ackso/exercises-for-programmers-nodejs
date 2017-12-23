#!/usr/bin/node

const readline = require('readline')
const retirement = require('./ex6.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let values = {}
rl.question('What is your current age? ', (firstNumber) => {
  values.firstNumber = firstNumber
  rl.question('At what age would you like to retire? ', (secondNumber) => {
    values.secondNumber = secondNumber
    console.log(retirement(values.firstNumber, values.secondNumber))
    rl.close()
  })
})

