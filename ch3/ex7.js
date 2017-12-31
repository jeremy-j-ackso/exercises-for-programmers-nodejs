/* eslint comma-dangle: "off", comma-spacing: "off" */

function sqft(length, width) {
  const invalids = [null, undefined,]
  if (invalids.includes(length) || invalids.includes(width)) {
    throw new Error('inputs must not be null or undefined')
  }

  if (!parseFloat(length) || !parseFloat(width)) {
    throw new Error('length and width must be digits')
  }

  return `${areaOfRectangle(length, width, 'feet')} square feet`
}

function sqmeters(length, width) {
  const invalids = [null, undefined,]
  if (invalids.includes(length) || invalids.includes(width)) {
    throw new Error('inputs must not be null or undefined')
  }

  if (!parseFloat(length) || !parseFloat(width)) {
    throw new Error('length and width must be digits')
  }

  return `${areaOfRectangle(length, width, 'meters')} square meters`
}

function dimensions(length, width) {
  const invalids = [null, undefined,]
  if (invalids.includes(length) || invalids.includes(width)) {
    throw new Error('inputs must not be null or undefined')
  }

  if (!parseFloat(length) || !parseFloat(width)) {
    throw new Error('length and width must be digits')
  }

  return `You entered dimensions of ${length} feet by ${width} feet.`
}

function areaOfRectangle(length, width, unit) {
  const invalids = [null, undefined,]
  if (invalids.includes(length) || invalids.includes(width) || invalids.includes(unit)) {
    throw new Error('inputs must not be null or undefined')
  }

  if (!['feet', 'meters'].includes(unit)) {
    throw new Error('units must be either \'feet\' or \'meters\'')
  }

  if (!parseFloat(length) || !parseFloat(width)) {
    throw new Error('length and width must be digits')
  }

  let area = length * width
  if (unit === 'meters') area *= 0.09290304
  return area.toFixed(3)
}

module.exports = {
  dimensions,
  sqft,
  sqmeters,
  areaOfRectangle,
}
