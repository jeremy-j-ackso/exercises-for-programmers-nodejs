/* eslint no-restricted-globals: "off" */

function retirement(currentAge, retirementAge) {
  if (isNaN(Number(currentAge))) throw new Error('inputs must be digits')
  if (isNaN(Number(retirementAge))) throw new Error('inputs must be digits')

  if (typeof currentAge !== 'string') throw new Error('inputs must be digits')
  if (typeof retirementAge !== 'string') throw new Error('inputs must be digits')

  const years = retirementAge - currentAge
  const curYear = new Date().getFullYear()
  const retYear = curYear + years
  return `You have ${years} years left until you can retire.\nIt's ${curYear}, so you can retire in ${retYear}.`
}

module.exports = retirement
