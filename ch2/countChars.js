#!/usr/bin/node

const readline = require('readline')
const countChars = require('./ex2.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is the input string? ', (inputString) => {
  const response = countChars(inputString)
  console.log(`${inputString}: ${response}`)
  rl.close()
})
