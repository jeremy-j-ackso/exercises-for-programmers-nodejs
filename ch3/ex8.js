function remainingPieces(people, pizzas, pieces) {
  if (typeof people !== 'string' || typeof pizzas !== 'string' || typeof pieces !== 'string') {
    throw new Error('arguments to this function must be provided as strings')
  }

  if (!Number.isInteger(parseFloat(people)) ||
    !Number.isInteger(parseFloat(pizzas)) ||
    !Number.isInteger(parseFloat(pieces))) {
    throw new Error('arguments must be parseable integer digits')
  }

  const total_pieces = pizzas * pieces
  const pieces_remain = total_pieces % people
  if (pieces_remain === 1) {
    return `There is ${pieces_remain} leftover piece.`
  }
  return `There are ${pieces_remain} leftover pieces.`
}

function piecesPerPerson(people, pizzas, pieces) {
  if (typeof people !== 'string' || typeof pizzas !== 'string' || typeof pieces !== 'string') {
    throw new Error('arguments to this function must be provided as strings')
  }

  if (!Number.isInteger(parseFloat(people)) ||
    !Number.isInteger(parseFloat(pizzas)) ||
    !Number.isInteger(parseFloat(pieces))) {
    throw new Error('arguments must be parseable integer digits')
  }

  const total_pieces = pizzas * pieces
  const pieces_each = Math.floor(total_pieces / people)
  return `Each person gets ${pieces_each} pieces of pizza.`
}

function aboutTheParty(people, pizzas, pieces) {
  if (typeof people !== 'string' || typeof pizzas !== 'string' || typeof pieces !== 'string') {
    throw new Error('arguments to this function must be provided as strings')
  }

  if (!Number.isInteger(parseFloat(people)) ||
    !Number.isInteger(parseFloat(pizzas)) ||
    !Number.isInteger(parseFloat(pieces))) {
    throw new Error('arguments must be parseable integer digits')
  }

  return `${people} ${pluralizer('people', people)} with ${pizzas} ${pluralizer('pizzas', pizzas)}, each pizza having ${pieces} ${pluralizer('pieces', pieces)}`
}

function pluralizer(type, val) {
  const plurals = {
    people: ['person', 'people'],
    pizzas: ['pizza', 'pizzas'],
    pieces: ['piece', 'pieces'],
  }

  if (!Object.keys(plurals).includes(type)) {
    throw new Error('type must be one of [\'person\', \'pizzas\', \'pieces\']')
  }

  if (typeof val !== 'string' || !Number.isInteger(parseFloat(val))) {
    throw new Error('val must be a parseable integer digit supplied as a string')
  }

  let lookup_val = val - 1
  if (lookup_val > 1) lookup_val = 1
  return plurals[type][lookup_val]
}

module.exports = {
  remainingPieces,
  piecesPerPerson,
  aboutTheParty,
  pluralizer,
}
