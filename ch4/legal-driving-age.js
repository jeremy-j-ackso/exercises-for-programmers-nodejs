#!/usr/bin/node

const readline = require('readline')

const { build16string } = require('./ex16.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is your age? ', (age) => {
  const output_string = build16string(age)
  console.log(output_string)
  rl.close()
})

