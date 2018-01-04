function itemSubtotal(price, qty) {
  const output = price * qty
  const output_fixed = output.toFixed(2)
  return output_fixed
}

function billSubtotal(subtotals) {
  const output = subtotals.reduce((arr, cv) => {
    arr += cv
    return arr
  }, 0)
  const output_fixed = output.toFixed(2)
  return output_fixed
}

function tax(subtotal) {
  const taxrate = 0.055
  const output = subtotal * taxrate
  const output_fixed = output.toFixed(2)
  return output_fixed
}

function total(subtotal, tax_val) {
  const output = subtotal + tax_val
  const output_fixed = output.toFixed(2)
  return output_fixed
}

function isStringedNumber(input, type) {
  if (!['money', 'quantity'].includes(type)) {
    throw new Error('type must be one of [\'money\', \'quantity\']')
  }

  if ((type === 'money' && !/^[0-9]+(\.[0-9]{2})?$/.test(input)) || typeof input !== 'string') {
    throw new Error('price must be a string digit, either as an integer, or with two decimal places')
  }

  if ((type === 'quantity' && !/^[0-9]+$/.test(input)) || typeof input !== 'string') {
    throw new Error('quantity must be a string integer')
  }

  return true
}

function outputBuilder(subtotal, tax_val, total_val) {
  const output = [
    `Subtotal: $${subtotal}`,
    `Tax: $${tax_val}`,
    `Total: $${total_val}`,
  ]

  return output.join('\n')
}

function selfCheckout(input) {
  const input_keys = Object.keys(input)
  input_keys.forEach((key) => {
    if (!['item1', 'item2', 'item3'].includes(key)) {
      throw new Error('input must be an object with three properties such that Object.keys(input) === [\'item1\', \'item2\', \'item3\']')
    }
  })
  if (!input_keys.includes('item1') || !input_keys.includes('item2') || !input_keys.includes('item3')) {
    throw new Error('input must be an object with three properties such that Object.keys(input) === [\'item1\', \'item2\', \'item3\']')
  }

  const input_vals = Object.values(input)
  input_vals.forEach((val) => {
    const val_keys = Object.keys(val)
    val_keys.forEach((key) => {
      if (!['price', 'qty'].includes(key)) {
        throw new Error('each item must have a price and qty and no other properties')
      }
    })
    if (!val_keys.includes('price') || !val_keys.includes('qty')) {
      throw new Error('each item must have a price and qty and no other properties')
    }

    isStringedNumber(val.price, 'money')
    isStringedNumber(val.qty, 'quantity')
  })

  const subtotals = [
    parseFloat(itemSubtotal(parseFloat(input.item1.price), parseFloat(input.item1.qty))),
    parseFloat(itemSubtotal(parseFloat(input.item2.price), parseFloat(input.item2.qty))),
    parseFloat(itemSubtotal(parseFloat(input.item3.price), parseFloat(input.item3.qty))),
  ]

  const billSub = billSubtotal(subtotals)
  const taxes = tax(parseFloat(billSub))
  const billTotal = total(parseFloat(billSub), parseFloat(taxes))

  const output = outputBuilder(billSub, taxes, billTotal)

  return output
}

module.exports = {
  selfCheckout,
  itemSubtotal,
  billSubtotal,
  tax,
  total,
  isStringedNumber,
  outputBuilder,
}
