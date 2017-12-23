#!/usr/bin/node

const readline = require('readline')
const simplemath = require('./ex5.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let values = {}
rl.question('What is the first number? ', (firstNumber) => {
  values.firstNumber = firstNumber
  rl.question('What is the second number? ', (secondNumber) => {
    values.secondNumber = secondNumber
    console.log(simplemath(values.firstNumber, values.secondNumber))
    rl.close()
  })
})

