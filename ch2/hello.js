#!/usr/bin/node

const readline = require('readline')
const hellof = require('./ex1.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is your name? ', (name) => {
  const response = hellof(name)
  console.log(response)
  rl.close()
})
