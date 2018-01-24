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

const {
  calculateBAC,
  isLegal,
  buildBacString,
  buildLegalString,
  buildBacOutput,
} = require('../ch4/ex17.js')

const {
  f_c,
  c_f,
  f_or_c,
  switch_scale,
  switch_calc,
  build_cf_string,
  proper_scale,
} = require('../ch4/ex18.js')

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

  describe('ex17.js', () => {
    describe('calculateBAC()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [170, 'Male', 84, 5, 4.5], expect: '0.11' },
          { args: [100, 'Male', 10, 10, 1], expect: '0.06' },
          { args: [100, 'Female', 20, 10, 2], expect: '0.13' },
          { args: [120, 'Female', 20, 10, 1], expect: '0.11' },
        ]

        ref_test.forEach((test) => {
          const [
            weight,
            gender,
            oz_drinks,
            alc_by_volume,
            time_since_last,
          ] = test.args
          expect(calculateBAC(weight, gender, oz_drinks, alc_by_volume, time_since_last))
            .to.equal(test.expect)
        })
      })
    })

    describe('isLegal()', () => {
      it('should return `true` if argument < 0.08', () => {
        let true_test = ['0.01', '0.06', '0.07']

        true_test.forEach((test) => {
          expect(isLegal(test)).to.be.ok()
        })
      })

      it('should return `false` if argument >= 0.08', () => {
        let false_test = ['0.08', '0.09', '0.15']

        false_test.forEach((test) => {
          expect(isLegal(test)).to.not.be.ok()
        })
      })
    })

    describe('buildBacString()', () => {
      it('should return value equal to reference', () => {
        let ref_test = [
          { arg: '0.01', expect: 'Your BAC is 0.01' },
          { arg: '0.08', expect: 'Your BAC is 0.08' },
          { arg: '0.11', expect: 'Your BAC is 0.11' },
        ]

        ref_test.forEach((test) => {
          expect(buildBacString(test.arg)).to.equal(test.expect)
        })
      })
    })

    describe('buildLegalString()', () => {
      it('should return value equal to reference', () => {
        let ref_test = [
          { arg: '0.01', expect: 'It is legal for you to drive.' },
          { arg: '0.07', expect: 'It is legal for you to drive.' },
          { arg: '0.08', expect: 'It is not legal for you to drive.' },
          { arg: '0.10', expect: 'It is not legal for you to drive.' },
        ]

        ref_test.forEach((test) => {
          expect(buildLegalString(test.arg)).to.equal(test.expect)
        })
      })
    })

    describe('buildBacOutput()', () => {
      it('should return value equal to reference', () => {
        let ref_test = [
          { args: ['170', 'Male', '84', '5', '4.5'], expect: 'Your BAC is 0.11\nIt is not legal for you to drive.' },
          { args: ['100', 'Male', '10', '10', '1'], expect: 'Your BAC is 0.06\nIt is legal for you to drive.' },
          { args: ['100', 'Female', '20', '10', '2'], expect: 'Your BAC is 0.13\nIt is not legal for you to drive.' },
          { args: ['120', 'Female', '20', '10', '1'], expect: 'Your BAC is 0.11\nIt is not legal for you to drive.' },
        ]

        ref_test.forEach((test) => {
          const [
            weight,
            gender,
            oz_drinks,
            alc_by_volume,
            time_since_last,
          ] = test.args
          expect(buildBacOutput(weight, gender, oz_drinks, alc_by_volume, time_since_last))
            .to.equal(test.expect)
        })
      })
    })
  })

  describe('ex18.js', () => {
    describe('f_c()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: 100, expect: 38 },
          { arg: 0, expect: -18 },
          { arg: 212, expect: 100 },
        ]

        ref_test.forEach((test) => {
          expect(f_c(test.arg)).to.equal(test.expect)
        })
      })
    })

    describe('c_f()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: 38, expect: 100 },
          { arg: -18, expect: 0 },
          { arg: 100, expect: 212 },
        ]

        ref_test.forEach((test) => {
          expect(c_f(test.arg)).to.equal(test.expect)
        })
      })
    })

    describe('switch_scale', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: 'c', expect: 'Fahrenheit' },
          { arg: 'f', expect: 'Celsius' }
        ]

        ref_test.forEach((test) => {
          expect(switch_scale(test.arg)).to.equal(test.expect)
        })
      })

      it('should throw an error on invalid input', () => {
        expect(switch_scale).withArgs('a').to.throwError('source scale must be either f or c')
      })
    })

    describe('switch_calc', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: ['c', 100], expect: 212 },
          { arg: ['f', 212], expect: 100 }
        ]

        ref_test.forEach((test) => {
          expect(switch_calc(test.arg[0], test.arg[1])).to.equal(test.expect)
        })
      })

      it('should throw an error on invalid input', () => {
        expect(switch_calc).withArgs('a', 123).to.throwError('source scale must be either f or c')
      })
    })

    describe('f_or_c()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['f', '0'], expect: { scale: 'Celsius', temp: -18 } },
          { args: ['f', '100'], expect: { scale: 'Celsius', temp: 38 } },
          { args: ['f', '212'], expect: { scale: 'Celsius', temp: 100 } },
          { args: ['c', '38'], expect: { scale: 'Fahrenheit', temp: 100 } },
          { args: ['c', '-18'], expect: { scale: 'Fahrenheit', temp: 0 } },
          { args: ['c', '100'], expect: { scale: 'Fahrenheit', temp: 212 } },
        ]

        ref_test.forEach((test) => {
          expect(f_or_c(test.args[0], test.args[1])).to.eql(test.expect)
        })
      })
    })

    describe('build_cf_string()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['f', '0'], expect: 'The temperature in Celsius is -18.' },
          { args: ['f', '212'], expect: 'The temperature in Celsius is 100.' },
          { args: ['c', '100'], expect: 'The temperature in Fahrenheit is 212.' },
          { args: ['c', '0'], expect: 'The temperature in Fahrenheit is 32.' },
        ]

        ref_test.forEach((test) => {
          expect(build_cf_string(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
    })

    describe('proper_scale()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: 'f', expect: 'Fahrenheit' },
          { arg: 'F', expect: 'Fahrenheit' },
          { arg: 'c', expect: 'Celsius' },
          { arg: 'C', expect: 'Celsius' },
        ]

        ref_test.forEach((test) => {
          expect(proper_scale(test.arg)).to.equal(test.expect)
        })
      })

      it('should throw an error on invalid input', () => {
        expect(proper_scale).withArgs('a').to.throwError('source scale must be either f or c')
      })
    })
  })
})
