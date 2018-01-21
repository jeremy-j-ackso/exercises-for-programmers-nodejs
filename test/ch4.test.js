/* eslint no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */
/* global describe, it */

const expect = require('expect.js')

const {
  is_wi,
  calc_tax,
  buildTCstring,
} = require('../ch4/ex14.js')

describe('Chapter 4', () => {
  describe('ex14.js', () => {
    describe('is_wi()', () => {
      it('should return `true` when it starts with the letters `wi` in any case', () => {
        let true_test = [
          { args: 'wisconsin' },
          { args: 'Wisconsin' },
          { args: 'WISCONSIN' },
          { args: 'wi' },
          { args: 'WI' },
        ]

        true_test.forEach((test) => {
          expect(is_wi(test.args)).to.be.ok()
        })
      })

      it('should return `false` when it starts with any letters other than `wi`', () => {
        let false_test = [
          { args: 'wysconsin' },
          { args: 'new york' },
          { args: 'NW Territories' },
          { args: 'iw' },
          { args: 'IW' },
          { args: 'w i' },
          { args: 'W I' },
        ]

        false_test.forEach((test) => {
          expect(is_wi(test.args)).to.not.be.ok()
        })
      })
    })

    describe('calc_tax()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: 0.99, expect: '0.05' },
          { args: 1, expect: '0.06' },
          { args: 1.10, expect: '0.06' },
          { args: 1.20, expect: '0.07' },
        ]

        ref_test.forEach((test) => {
          expect(calc_tax(test.args)).to.equal(test.expect)
        })
      })
    })

    describe('buildTCstring()', () => {
      it('should produce output equal to reference', () => {
        let ref_test = [
          { args: ['10', 'WI'], expect: 'The subtotal is $10.00.\nThe tax is $0.55.\nThe total is $10.55.' },
          { args: ['10', 'MN'], expect: 'The total is $10.00.' },
        ]

        ref_test.forEach((test) => {
          expect(buildTCstring(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
    })
  })
})
