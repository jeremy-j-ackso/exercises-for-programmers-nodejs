function tipCalculator(billAmount, tipRate) {
  var bill = billAmount
  var tipPerc = tipRate

  if (typeof bill !== 'number') {
    throw new Error('billAmount must be a number, either float or integer.')
  }

  if (typeof tipPerc !== 'number') {
    throw new Error('tipRate must be a number, either float or integer.')
  } 

  if (bill <= 0) {
    throw new Error('billAmount must be greater than 0')
  }

  if (tipPerc <= 0) {
    throw new Error('tipRate must be greater than 0')
  }

  if (tipPerc < 1) {
    console.warn('You entered a tipRate less than 1.\n',
      'The program will still function with this value, however you should know that it ',
      'expects the tipRate to be in the form of, for example 15%, so you would enter 15 ',
      'not 0.15.\n'
    )
  }

  tipPerc = tipPerc / 100

  var tip = parseFloat((bill * tipPerc).toFixed(2))
  var total = parseFloat((bill + tip).toFixed(2))

  return {tip, total}

}

module.exports = tipCalculator
