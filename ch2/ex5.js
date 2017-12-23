/* eslint no-restricted-globals: "off" */

function simplemath(firstNum, secondNum) {
  if (isNaN(Number(firstNum))) throw new Error('inputs must be digits')
  if (isNaN(Number(secondNum))) throw new Error('inputs must be digits')

  if (typeof firstNum !== 'string') throw new Error('inputs must be digits')
  if (typeof secondNum !== 'string') throw new Error('inputs must be digits')

  const fnum = Number(firstNum)
  const snum = Number(secondNum)

  let mathObj = {
    add: fnum + snum,
    subtract: fnum - snum,
    multiply: fnum * snum,
    divide: fnum / snum,
  }

  mathObj.divide = parseFloat(mathObj.divide.toFixed(2))

  return `${fnum} + ${snum} = ${mathObj.add}\n${fnum} - ${snum} = ${mathObj.subtract}\n${fnum} * ${snum} = ${mathObj.multiply}\n${fnum} / ${snum} = ${mathObj.divide}`
}

module.exports = simplemath
