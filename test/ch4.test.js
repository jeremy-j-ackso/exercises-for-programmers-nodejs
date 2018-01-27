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

const {
  calculate_bmi,
  onu,
  build_bmi_string,
} = require('../ch4/ex19.js')

const {
  illinois_tax,
  wisconsin_tax,
  state_tax,
  multistate_tax_total_string,
} = require('../ch4/ex20.js')

const {
  num_2_name,
  mon_string,
} = require('../ch4/ex21.js')

const {
  max_val,
  build_numeric_set,
  arr_2_set,
  compareLength_arr_2_set,
  all_ints,
  build_compare_string,
} = require('../ch4/ex22.js')

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

  describe('ex19.js', () => {
    describe('calculate_bmi()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [72, 240], expect: '32.5' },
          { args: [74, 240], expect: '30.8' },
          { args: [74, 170], expect: '21.8' },
          { args: [60, 100], expect: '19.5' },
        ]

        ref_test.forEach((test) => {
          expect(calculate_bmi(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
    })

    describe('onu()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: '32.5', expect: 'Your BMI is 32.5.\nYou are overweight. You should see your doctor.' },
          { arg: '20', expect: 'Your BMI is 20.\nYou are within the ideal weight range.' },
          { arg: '12.5', expect: 'Your BMI is 12.5.\nYou are underweight. You should see your doctor.' },
        ]

        ref_test.forEach((test) => {
          expect(onu(test.arg)).to.equal(test.expect)
        })
      })
    })

    describe('build_bmi_string()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['72', '240'], expect: 'Your BMI is 32.5.\nYou are overweight. You should see your doctor.' },
          { args: ['74', '240'], expect: 'Your BMI is 30.8.\nYou are overweight. You should see your doctor.' },
          { args: ['74', '170'], expect: 'Your BMI is 21.8.\nYou are within the ideal weight range.' },
          { args: ['60', '100'], expect: 'Your BMI is 19.5.\nYou are within the ideal weight range.' },
          { args: ['80', '100'], expect: 'Your BMI is 11.0.\nYou are underweight. You should see your doctor.' },
        ]

        ref_test.forEach((test) => {
          expect(build_bmi_string(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
    })
  })

  describe('ex20.js', () => {
    describe('illinois_tax()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: 1.00, expect: 0.08 },
          { arg: 1.01, expect: 0.0808 },
        ]

        ref_test.forEach((test) => {
          expect(illinois_tax(test.arg)).to.eql(test.expect)
        })
      })
    })

    describe('wisconsin_tax()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [1.00, 'river'], expect: [0.049, 0.051] },
          { args: [1.01, 'river'], expect: [0.05049, 0.0506] },
          { args: [1.00, 'dunn'], expect: [0.05039, 0.05041] },
          { args: [1.01, 'dunn'], expect: [0.05089, 0.05091] },
          { args: [1.00, 'eau claire'], expect: [0.05049, 0.05051] },
          { args: [1.01, 'eau claire'], expect: [0.0509, 0.0511] },
        ]

        ref_test.forEach((test) => {
          expect(wisconsin_tax(test.args[0], test.args[1])).to.be.greaterThan(test.expect[0])
          expect(wisconsin_tax(test.args[0], test.args[1])).to.be.lessThan(test.expect[1])
        })
      })
    })

    describe('state_tax()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['1.00', 'hi', ''], expect: [0.0, ''] },
          { args: ['1.00', 'il', ''], expect: [0.08, 'The tax is $0.08.\n'] },
          { args: ['1.00', 'wi', 'dunn'], expect: [0.05, 'The tax is $0.05.\n'] },
          { args: ['1.00', 'wi', 'eau claire'], expect: [0.05, 'The tax is $0.05.\n'] },
        ]

        ref_test.forEach((test) => {
          expect(state_tax(test.args[0], test.args[1], test.args[2])).to.eql(test.expect)
        })
      })
    })

    describe('multistate_tax_total_string()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['1.00', 'hi', ''], expect: 'The total is $1.00.' },
          { args: ['1.00', 'il', ''], expect: 'The tax is $0.08.\nThe total is $1.08.' },
          { args: ['1.00', 'wi', 'dunn'], expect: 'The tax is $0.05.\nThe total is $1.05.' },
          { args: ['1.00', 'wi', 'eau claire'], expect: 'The tax is $0.05.\nThe total is $1.05.' },
        ]

        ref_test.forEach((test) => {
          expect(multistate_tax_total_string(test.args[0], test.args[1], test.args[2]))
            .to.equal(test.expect)
        })
      })
    })
  })

  describe('ex21.js', () => {
    describe('num_2_name()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: '1', expect: 'January' },
          { arg: '2', expect: 'February' },
          { arg: '3', expect: 'March' },
          { arg: '4', expect: 'April' },
          { arg: '5', expect: 'May' },
          { arg: '6', expect: 'June' },
          { arg: '7', expect: 'July' },
          { arg: '8', expect: 'August' },
          { arg: '9', expect: 'September' },
          { arg: '10', expect: 'October' },
          { arg: '11', expect: 'November' },
          { arg: '12', expect: 'December' },
        ]

        ref_test.forEach((test) => {
          expect(num_2_name(test.arg)).to.equal(test.expect)
        })
      })

      it('should produce throw an error on invalid input', () => {
        let err_test = [0, 13]
        err_test.forEach((test) => {
          expect(num_2_name).withArgs(test).to.throwError('Months numbers must be in the range of 1-12.')
        })
      })
    })

    describe('mon_string()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: '1', expect: 'The name of the month is January' },
          { arg: '2', expect: 'The name of the month is February' },
          { arg: '3', expect: 'The name of the month is March' },
          { arg: '4', expect: 'The name of the month is April' },
          { arg: '5', expect: 'The name of the month is May' },
          { arg: '6', expect: 'The name of the month is June' },
          { arg: '7', expect: 'The name of the month is July' },
          { arg: '8', expect: 'The name of the month is August' },
          { arg: '9', expect: 'The name of the month is September' },
          { arg: '10', expect: 'The name of the month is October' },
          { arg: '11', expect: 'The name of the month is November' },
          { arg: '12', expect: 'The name of the month is December' },
        ]

        ref_test.forEach((test) => {
          expect(mon_string(test.arg)).to.equal(test.expect)
        })
      })
    })
  })

  describe('ex22.js', () => {
    describe('max_val()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: new Set([1, 2, 3]), expect: 3 },
          { arg: new Set([6, 5, 4]), expect: 6 },
          { arg: new Set([10, 20, 3]), expect: 20 },
        ]

        ref_test.forEach((test) => {
          expect(max_val(test.arg)).to.equal(test.expect)
        })
      })
    })

    describe('build_numeric_set()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: new Set(['1', '2', '3']), expect: new Set([1, 2, 3]) },
          { arg: new Set(['6', '5', '4']), expect: new Set([6, 5, 4]) },
          { arg: new Set(['10', '20', '3']), expect: new Set([10, 20, 3]) },
        ]

        ref_test.forEach((test) => {
          expect(build_numeric_set(test.arg)).to.eql(test.expect)
        })
      })
    })

    describe('arr_2_set()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: ['1', '2', '3'], expect: new Set(['1', '2', '3']) },
          { arg: ['a', 'b', 'c'], expect: new Set(['a', 'b', 'c']) },
        ]

        ref_test.forEach((test) => {
          expect(arr_2_set(test.arg)).to.eql(test.expect)
        })
      })
    })

    describe('compareLength_arr_2_set()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [['1', '2', '3'], new Set(['1', '2', '3'])], expect: true },
          { args: [['1', '2'], new Set(['1', '2', '3'])], expect: false },
          { args: [['1', '2', '3'], new Set(['1', '2'])], expect: false },
        ]

        ref_test.forEach((test) => {
          expect(compareLength_arr_2_set(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
    })

    describe('all_ints()', () => {
      it('should return true if all values in set are integers', () => {
        let true_test = [
          ['1', '2', '3'],
        ]

        true_test.forEach((test) => {
          expect(all_ints(test)).to.be.ok()
        })
      })

      it('should return false if all value in set are not integers', () => {
        let false_test = [
          ['1', '1', '1.11'],
          ['1.11', '1', '1'],
          ['1', '1.11', '1'],
        ]

        false_test.forEach((test) => {
          expect(all_ints(test)).to.not.be.ok()
        })
      })
    })

    describe('build_compare_string()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { arg: ['1', '2', '3'], expect: 'The largest number is 3.' },
          { arg: ['3', '2', '1'], expect: 'The largest number is 3.' },
          { arg: ['1', '3', '2'], expect: 'The largest number is 3.' },
        ]

        ref_test.forEach((test) => {
          expect(build_compare_string(test.arg)).to.equal(test.expect)
        })
      })

      it('should produce an error message if two or more of the inputs are the same', () => {
        let err_test = [
          ['1', '1', '2'],
          ['1', '1', '1'],
        ]

        err_test.forEach((test) => {
          expect(build_compare_string).withArgs(test).to.throwError('all input values must be different')
        })
      })

      it('should produce an error if any input is not an integer', () => {
        let err_test = [
          ['1', '2.2', '3'],
          ['1', '2.2.2', '3'],
          ['1', 'a', '3'],
        ]

        err_test.forEach((test) => {
          expect(build_compare_string).withArgs(test).to.throwError('all input values must be integers')
        })
      })
    })
  })
})
