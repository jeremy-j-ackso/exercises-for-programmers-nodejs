#!/usr/bin/node

const readline = require('readline')
const {
  paintCalculator,
  dimensions_paint,
} = require('../ch3/ex9.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is the length of the ceiling you are painting? ', (length) => {
  rl.question('What is the width of the ceiling you are painting? ', (width) => {
    console.log(`You will need ${paintCalculator(length, width)} gallons of paint to cover ${dimensions_paint(length, width)} square feet.`)
    rl.close()
  })
})
