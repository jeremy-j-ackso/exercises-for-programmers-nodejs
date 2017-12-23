/* eslint no-undef: "off", no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */

const expect = require('expect.js')

const hellof = require('../ch2/ex1.js')
const countChars = require('../ch2/ex2.js')
const quote = require('../ch2/ex3.js')
const madlib = require('../ch2/ex4.js')
const simplemath = require('../ch2/ex5.js')
const retirement = require('../ch2/ex6.js')

describe('ch2', () => {
  describe('ex1.js', () => {
    it('should return values equal to reference.', () => {
      const ref_test = [
        { args: 'Jeremy', expect: 'Hello, Jeremy, nice to meet you!' },
        { args: 'Sue', expect: 'Hello, Sue, nice to meet you!' },
        { args: 'Bob', expect: 'Hello, Bob, nice to meet you!' },
        { args: 'Ana', expect: 'Hello, Ana, nice to meet you!' },
        { args: 'Tom', expect: 'Hello, Tom, nice to meet you!' },
        { args: '5', expect: 'Hello, 5, nice to meet you!' },
      ]
      ref_test.forEach((test) => {
        expect(hellof(test.args)).to.eql(test.expect)
      })
    })

    it('should throw an error if not given a string', () => {
      const err_test = [
        { args: undefined },
        { args: null },
        { args: 5 },
      ]
      err_test.forEach((test) => {
        expect(hellof).withArgs(test.args).to.throwError('name should be a string')
      })
    })
  })

  describe('ex2.js', () => {
    it('should return values equal to reference', () => {
      const ref_test = [
        { args: 'Jeremy', expect: 6 },
        { args: 'bob', expect: 3 },
        { args: 'eleventy-one', expect: 12 },
      ]
      ref_test.forEach((test) => {
        expect(countChars(test.args)).to.equal(test.expect)
      })
    })

    it('should throw an error if not given a string', () => {
      const err_test = [
        { args: undefined },
        { args: null },
        { args: 5 },
      ]
      err_test.forEach((test) => {
        expect(countChars).withArgs(test.args).to.throwError('inputString should be a string')
      })
    })
  })

  describe('ex3.js', () => {
    it('should return values equal to reference', () => {
      const ref_test = [
        { args: ['bob', 'Hi.'], expect: 'bob says, "Hi."' },
        { args: ['Joe', 'Hello.'], expect: 'Joe says, "Hello."' },
        { args: ['R2D2', 'beep-bloop'], expect: 'R2D2 says, "beep-bloop"' },
      ]
      ref_test.forEach((test) => {
        expect(quote(test.args[0], test.args[1])).to.equal(test.expect)
      })
    })

    it('should throw an error if an argument is empty, undefined, or null', () => {
      const err_test = [
        { args: [,] },
        { args: [, 'hi'] },
        { args: ['hi',] },
        { args: [null, null] },
        { args: [null, 'hi'] },
        { args: ['hi', null] },
        { args: [undefined, undefined] },
        { args: [undefined, 'hi'] },
        { args: ['hi', undefined] },
      ]
      err_test.forEach((test) => {
        expect(quote).withArgs(test.args[0], test.args[1]).to.throwError('all arguments must be strings')
      })
    })

    it('should throw an error if an argument is not a string', () => {
      const err_test = [
        { args: [1, 'hi'] },
        { args: ['hi', 1] },
        { args: [1, 1] },
      ]
      err_test.forEach((test) => {
        expect(quote).withArgs(test.args[0], test.args[1]).to.throwError('all arguments must be strings')
      })
    })
  })

  describe('ex4.js', () => {
    it('should return values equal to reference', () => {
      const ref_test = [
        { args: ['dog', 'walk', 'blue', 'quickly'], expect: 'Do you walk your blue dog quickly? That\'s hilarious!' },
        { args: ['cat', 'jump', 'lithe', 'anxiously'], expect: 'Do you jump your lithe cat anxiously? That\'s hilarious!' },
        { args: ['noun', 'verb', 'adjective', 'adverb'], expect: 'Do you verb your adjective noun adverb? That\'s hilarious!' },
      ]
      ref_test.forEach((test) => {
        expect(madlib(test.args[0], test.args[1], test.args[2], test.args[3])).to.equal(test.expect)
      })
    })

    it('should throw an error if an argument is empty, undefined, or null', () => {
      const err_test = [
        { args: [,,,] },
        { args: [, 'hi',,] },
        { args: ['hi',,,] },
        { args: [null, null, null, null] },
        { args: [null, 'hi', null, null] },
        { args: ['hi', null, null, null] },
        { args: [undefined, undefined, undefined, undefined] },
        { args: [undefined, 'hi', undefined, undefined] },
        { args: ['hi', undefined, undefined, undefined] },
      ]
      err_test.forEach((test) => {
        expect(madlib).withArgs(test.args[0], test.args[1], test.args[2], test.args[3]).to.throwError('all arguments must be strings')
      })
    })

    it('should throw an error if an argument is not a string', () => {
      const err_test = [
        { args: [1, 'hi', 'hi', 'hi'] },
        { args: ['hi', 1, 'hi', 'hi'] },
        { args: [1, 1, 1, 1] },
      ]
      err_test.forEach((test) => {
        expect(madlib).withArgs(test.args[0], test.args[1]).to.throwError('all arguments must be strings')
      })
    })
  })

  describe('ex5.js', () => {
    it('should return values equal to reference', () => {
      const ref_test = [
        { args: ['1', '2'], expect: '1 + 2 = 3\n1 - 2 = -1\n1 * 2 = 2\n1 / 2 = 0.5' },
        { args: ['8', '3'], expect: '8 + 3 = 11\n8 - 3 = 5\n8 * 3 = 24\n8 / 3 = 2.67' },
        { args: ['19', '1'], expect: '19 + 1 = 20\n19 - 1 = 18\n19 * 1 = 19\n19 / 1 = 19' },
      ]
      ref_test.forEach((test) => {
        expect(simplemath(test.args[0], test.args[1])).to.equal(test.expect)
      })
    })

    it('should throw an error if the string input cannot be coerced to a number', () => {
      const err_test = [
        { args: ['one', '1'] },
        { args: ['1', 'one'] },
        { args: ['one', 'one'] },
      ]
      err_test.forEach((test) => {
        expect(simplemath).withArgs(test.args[0], test.args[1]).to.throwError('inputs must be digits')
      })
    })

    it('should throw an error if the input is actually a number and not a string', () => {
      const err_test = [
        { args: [1, 1] },
        { args: ['one', 1] },
        { args: [1, 'one'] },
      ]
      err_test.forEach((test) => {
        expect(simplemath).withArgs(test.args[0], test.args[1]).to.throwError('inputs must be digits')
      })
    })

    it('should throw an error if inputs are null or undefined', () => {
      const err_test = [
        { args: [,] },
        { args: [undefined,] },
        { args: [, undefined] },
        { args: [undefined, undefined] },
        { args: [null,] },
        { args: [, null] },
        { args: [null, null] },
      ]
      err_test.forEach((test) => {
        expect(simplemath).withArgs(test.args[0], test.args[1]).to.throwError('inputs must be digits')
      })
    })
  })

  describe('ex6.js', () => {
    it('should return values equal to reference', () => {
      const ref_test = [
        { args: ['20', '40'], expect: 'You have 20 years left until you can retire.\nIt\'s 2017, so you can retire in 2037.' },
        { args: ['20', '60'], expect: 'You have 40 years left until you can retire.\nIt\'s 2017, so you can retire in 2057.' },
      ]
      ref_test.forEach((test) => {
        expect(retirement(test.args[0], test.args[1])).to.equal(test.expect)
      })
    })

    it('should throw an error if the input is actually a number and not a string', () => {
      const err_test = [
        { args: [1, 1] },
        { args: ['one', 1] },
        { args: [1, 'one'] },
      ]
      err_test.forEach((test) => {
        expect(simplemath).withArgs(test.args[0], test.args[1]).to.throwError('inputs must be digits')
      })
    })

    it('should throw an error if inputs are null or undefined', () => {
      const err_test = [
        { args: [,] },
        { args: [undefined,] },
        { args: [, undefined] },
        { args: [undefined, undefined] },
        { args: [null,] },
        { args: [, null] },
        { args: [null, null] },
      ]
      err_test.forEach((test) => {
        expect(simplemath).withArgs(test.args[0], test.args[1]).to.throwError('inputs must be digits')
      })
    })
  })
})
