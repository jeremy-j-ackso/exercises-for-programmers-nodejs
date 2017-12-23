#!/usr/bin/node

const readline = require('readline')
const quote = require('./ex3.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is the quote? ', (inputQuote) => {
  rl.question('Who said it? ', (inputSpeaker) => {
    const response = quote(inputSpeaker, inputQuote)
    console.log(response)
    rl.close()
  })
})

