function paintCalculator(length, width) {
  if (!/^[0-9]+\.?[0-9]*$/.test(length) || typeof length !== 'string') {
    throw new Error('length must be a parseable number provided as a string')
  }

  if (!/^[0-9]+\.?[0-9]*$/.test(width) || typeof width !== 'string') {
    throw new Error('width must be a parseable number provided as a string')
  }

  const galPerSqFt = 1 / 350
  const sqft_num = dimensions_paint(length, width)

  return Math.ceil(sqft_num * galPerSqFt)
}

function dimensions_paint(length, width) {
  if (!/^[0-9]+\.?[0-9]*$/.test(length) || typeof length !== 'string') {
    throw new Error('length must be a parseable number provided as a string')
  }

  if (!/^[0-9]+\.?[0-9]*$/.test(width) || typeof width !== 'string') {
    throw new Error('width must be a parseable number provided as a string')
  }

  const length_num = parseFloat(length)
  const width_num = parseFloat(width)
  return length_num * width_num
}

module.exports = {
  paintCalculator,
  dimensions_paint,
}

