/* eslint no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */
/* global describe, it */

const expect = require('expect.js')

const {
  is_wi,
  calc_tax,
  buildTCstring,
} = require('../ch4/ex14.js')

const {
  buildResponse,
  validateInput,
} = require('../ch4/ex15.js')

const {
  validate16,
  build16string,
} = require('../ch4/ex16.js')

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

  describe('ex15.js', () => {
    describe('validateInput()', () => {
      it('should return `true` on validation', () => {
        expect(validateInput('abc$123')).to.be.ok()
      })

      it('should return `false` on a failed validation', () => {
        let false_test = ['123456', 'abcdefgh']
        false_test.forEach((test) => {
          expect(validateInput(test)).to.not.be.ok()
        })
      })
    })

    describe('buildResponse()', () => {
      it('should return `Welcome!` on validation', () => {
        expect(buildResponse('abc$123')).to.equal('Welcome!')
      })

      it('should return `I don\'t know you!` on failure to validate', () => {
        let false_test = ['123456', 'abcdefgh']
        false_test.forEach((test) => {
          expect(validateInput(test)).to.not.be.equal('I don\'t know you!')
        })
      })
    })
  })

  describe('ex16.js', () => {
    describe('validate16()', () => {
      it('should return `true` for all values >= 16', () => {
        let true_test = [16, 17, 18, 1000]

        true_test.forEach((test) => {
          expect(validate16(test)).to.be.ok()
        })
      })

      it('should return `false` for all values < 16', () => {
        let false_test = [15.99, 15, 4, 0]

        false_test.forEach((test) => {
          expect(validate16(test)).to.not.be.ok()
        })
      })
    })

    describe('build16string()', () => {
      it('when >=16 should return a string informing user they are old enough to drive', () => {
        let true_test = ['16', '17', '18', '1000']

        true_test.forEach((test) => {
          expect(build16string(test)).to.equal('You are old enough to legally drive.')
        })
      })

      it('when <16 should return a string informing user they are old enough to drive', () => {
        let false_test = ['15.99', '15', '4', '0']

        false_test.forEach((test) => {
          expect(build16string(test)).to.equal('You are not old enough to legally drive.')
        })
      })
    })
  })
})
