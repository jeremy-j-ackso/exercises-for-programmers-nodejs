function madlib(noun, verb, adjective, adverb) {
  if (typeof noun !== 'string' || typeof verb !== 'string' ||
    typeof adjective !== 'string' || typeof adverb !== 'string') {
    throw new Error('all arguments must be strings')
  }
  return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
}

module.exports = madlib
