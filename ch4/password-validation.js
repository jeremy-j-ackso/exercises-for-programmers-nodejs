#!/usr/bin/node

const readline = require('readline')

const { buildResponse } = require('./ex15.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is the password? ', (pass) => {
  const output_string = buildResponse(pass)
  console.log(output_string)
  rl.close()
})
