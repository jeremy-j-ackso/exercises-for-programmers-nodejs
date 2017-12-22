/* eslint no-undef: "off" */

const expect = require('expect.js')

const hellof = require('../ch2/ex1.js')
const countChars = require('../ch2/ex2.js')

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
})
