#!/usr/bin/node

const readline = require('readline')
const { mon_string } = require('./ex21.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Please enter the number of the month: ', (num) => {
  const output_string = mon_string(num)
  console.log(output_string)
  rl.close()
})
