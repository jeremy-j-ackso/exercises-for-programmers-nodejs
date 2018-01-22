/* eslint no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */
/* global describe, it */

const expect = require('expect.js')

const check_numeric_strings = require('../utils/check-numeric-strings.js')
const check_number = require('../utils/check-number.js')
const check_string = require('../utils/check-string.js')

describe('Test Utilities', () => {
  describe('check_numeric_strings()', () => {
    it('should return `true` on valid inputs', () => {
      let true_test = [
        { args: '111' },
        { args: '1.11' },
      ]

      true_test.forEach((test) => {
        expect(check_numeric_strings(test.args)).to.be.ok()
      })
    })

    it('should throw error if the input amount is not a string', () => {
      let err_test = [
        { args: 123 },
        { args: 1.23 },
        { args: [1.23] },
        { args: { key: 1.23 } },
      ]

      err_test.forEach((test) => {
        expect(check_numeric_strings).withArgs(test.args).to.throwError('input amount must be delivered as a string')
      })
    })

    it('should throw error if the input is not parseable to a number', () => {
      let err_test = [
        { args: 'one two three' },
        { args: '1.2.3' },
      ]

      err_test.forEach((test) => {
        expect(check_numeric_strings).withArgs(test.args).to.throwError('input must be parseable as a number')
      })
    })
  })

  describe('check_number()', () => {
    it('should return `true` when given a number', () => {
      let return_test = [1, 1.111, 1111]
      return_test.forEach((test) => {
        expect(check_number(test, '')).to.be.ok()
      })
    })

    it('should throw an error when given non-numeric input', () => {
      let err_test = [
        { args: ['one two three', 'fake_function'], expect: 'input to fake_function() must be a number' },
        { args: ['1.2.3', 'some_other_fake_function'], expect: 'input to some_other_fake_function() must be a number' },
        { args: ['1.2', 'yet_another_fake_function'], expect: 'input to yet_another_fake_function() must be a number' },
      ]
      err_test.forEach((test) => {
        expect(check_number).withArgs(test.args[0], test.args[1]).to.throwError(test.expect)
      })
    })
  })

  describe('check_string()', () => {
    it('should return `true` when given a string', () => {
      let return_test = ['one two three', '1.2.3', '1.2']

      return_test.forEach((test) => {
        expect(check_string(test, '')).to.be.ok()
      })
    })

    it('should throw an error when given non-string input', () => {
      let err_test = [
        { args: [1, 'fake_function'], expect: 'input to fake_function() must be a string' },
        { args: [1.111, 'some_other_fake_function'], expect: 'input to some_other_fake_function() must be a string' },
        { args: [1111, 'yet_another_fake_function'], expect: 'input to yet_another_fake_function() must be a string' },
      ]
      err_test.forEach((test) => {
        expect(check_string).withArgs(test.args[0], test.args[1]).to.throwError(test.expect)
      })
    })
  })
})
