#!/usr/bin/node

const readline = require('readline')
const {
  dimensions,
  sqft,
  sqmeters,
} = require('../ch3/ex7.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is the length of the room in feet? ', (length) => {
  rl.question('What is the width of the room in feet? ', (width) => {
    console.log(dimensions(length, width))
    console.log('The area is')
    console.log(sqft(length, width))
    console.log(sqmeters(length, width))
    rl.close()
  })
})
