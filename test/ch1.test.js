/* eslint no-undef: "off" */

let expect = require('expect.js')
let tipCalculator = require('../ch1')

describe('ch1', () => {
  describe('tipCalculator', () => {
    let ref_tests = [
      { args: [1, 15], expected: { tip: 0.15, total: 1.15 } },
      { args: [15, 20], expected: { tip: 3.00, total: 18.00 } },
      { args: [15.30, 18.5], expected: { tip: 2.83, total: 18.13 } },
    ]
    it('correctly outputs values equal to reference', () => {
      ref_tests.forEach((test) => {
        expect(tipCalculator(test.args[0], test.args[1])).to.eql(test.expected)
      })
    })

    let err_tests = [
      { args: ['one', 15], throws: 'billAmount must be a number, either float or integer.' },
      { args: [1, 'fifteen'], throws: 'tipRate must be a number, either float or integer.' },
      { args: ['one', 'fifteen'], throws: 'billAmount must be a number, either float or integer.' },
      { args: [0, 15], throws: 'billAmount must be greater than 0' },
      { args: [-12, 15], throws: 'billAmount must be greater than 0' },
      { args: [12, -15], throws: 'tipRate must be greater than 0' },
      { args: [12, 0], throws: 'tipRate must be greater than 0' },
      { args: [undefined, 0], throws: 'billAmount must be greater than 0' },
      { args: [0, undefined], throws: 'tipRate must be greater than 0' },
      { args: [undefined, undefined], throws: 'billAmount must be greater than 0' },
      { args: [null, null], throws: 'billAmount must be greater than 0' },
    ]
    it('throw on invalid inputs', () => {
      err_tests.forEach((test) => {
        expect(tipCalculator).withArgs(test.args[0], test.args[1]).to.throwError(test.throws)
      })
    })
  })
})
