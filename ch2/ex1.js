function hello(name) {
  if (typeof name !== 'string') throw new Error('name should be a string')
  return `Hello, ${name}, nice to meet you!`
}

module.exports = hello
