/* eslint prefer-template: "off" */

// prefer-template is switched off because the book says to use concatenation.

function quote(author, qte) {
  if (typeof author !== 'string') throw new Error('all arguments must be strings')
  if (typeof qte !== 'string') throw new Error('all arguments must be strings')
  return author + ' says, "' + qte + '"'
}

module.exports = quote
