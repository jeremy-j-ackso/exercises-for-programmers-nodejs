#!/usr/bin/node

const readline = require('readline')
const madlib = require('../ch2/ex4.js')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let builder = {}
rl.question('Enter a noun: ', (noun) => {
  builder.noun = noun
  rl.question('Enter a verb: ', (verb) => {
    builder.verb = verb
    rl.question('Enter an adjective: ', (adjective) => {
      builder.adjective = adjective
      rl.question('Enter an adverb: ', (adverb) => {
        builder.adverb = adverb
        console.log(madlib(builder.noun, builder.verb, builder.adjective, builder.adverb))
        rl.close()
      })
    })
  })
})
