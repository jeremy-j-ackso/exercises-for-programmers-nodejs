#!/usr/bin/node

const readline = require('readline')
const { buildBacOutput } = require('./ex17.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

ask_weight()
  .then(passed_data => ask_gender(passed_data))
  .then(passed_data => ask_drink_number(passed_data))
  .then(passed_data => ask_alcohol(passed_data))
  .then(passed_data => ask_time_last(passed_data))
  .then((passed_data) => {
    const {
      weight,
      gender,
      oz,
      perc,
      hours,
    } = passed_data
    const output_string = buildBacOutput(weight, gender, oz, perc, hours)
    console.log(output_string)
    rl.close()
  })

function ask_weight() {
  return new Promise((resolve, reject) => {
    rl.question('What is your weight? ', (weight) => {
      resolve({ weight })
      reject()
    })
  })
}

function ask_gender(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is your gender (Male/Female)? ', (gender) => {
      passed_data.gender = gender
      resolve(passed_data)
      reject()
    })
  })
}

function ask_drink_number(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('How many ounces did you drink? ', (oz) => {
      passed_data.oz = oz
      resolve(passed_data)
      reject()
    })
  })
}

function ask_alcohol(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('What is the alcohol percentage? ', (perc) => {
      passed_data.perc = perc
      resolve(passed_data)
      reject()
    })
  })
}

function ask_time_last(passed_data) {
  return new Promise((resolve, reject) => {
    rl.question('How many hours since your last drink? ', (hours) => {
      passed_data.hours = hours
      resolve(passed_data)
      reject()
    })
  })
}

