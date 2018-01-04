#!/usr/bin/node

const readline = require('readline')
const { selfCheckout } = require('./ex10.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

enterPrice({}, 1)
  .then(passedData => enterQty(passedData, 1))
  .then(passedData => enterPrice(passedData, 2))
  .then(passedData => enterQty(passedData, 2))
  .then(passedData => enterPrice(passedData, 3))
  .then(passedData => enterQty(passedData, 3))
  .then((passedData) => {
    const output = selfCheckout(passedData)
    console.log(output)
    rl.close()
  })

function enterPrice(passedData, itemNumber) {
  return new Promise((resolve, reject) => {
    rl.question(`Enter the price of item ${itemNumber}: `, (price) => {
      passedData[`item${itemNumber}`] = { price }
      resolve(passedData)
      reject()
    })
  })
}

function enterQty(passedData, itemNumber) {
  return new Promise((resolve, reject) => {
    rl.question(`Enter the quantity of item ${itemNumber}: `, (qty) => {
      passedData[`item${itemNumber}`].qty = qty
      resolve(passedData)
      reject()
    })
  })
}
