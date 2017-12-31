#!/usr/bin/node

const readline = require('readline')
const {
  remainingPieces,
  piecesPerPerson,
  aboutTheParty,
} = require('./ex8.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('How many people? ', (people) => {
  rl.question('How many pizzas? ', (pizzas) => {
    rl.question('How many pieces per pizza? ', (pieces) => {
      console.log(aboutTheParty(people, pizzas, pieces))
      console.log(piecesPerPerson(people, pizzas, pieces))
      console.log(remainingPieces(people, pizzas, pieces))
      rl.close()
    })
  })
})
