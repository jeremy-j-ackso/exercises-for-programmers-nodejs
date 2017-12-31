/* eslint no-undef: "off", no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */

const expect = require('expect.js')
const {
  dimensions,
  sqft,
  sqmeters,
  areaOfRectangle,
} = require('../ch3/ex7.js')

// require() in the exercises here

describe('ch3', () => {
  describe('ex7.js', () => {
    describe('areaOfRectangle()', () => {
      it('should output values equal to reference for unit==feet', () => {
        const ref_test = [
          { args: ['1', '2', 'feet'], expect: '2.000' },
          { args: ['15', '25', 'feet'], expect: '375.000' },
        ]

        ref_test.forEach((test) => {
          expect(areaOfRectangle(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })

      it('should output values equal to reference for unit==metric', () => {
        const ref_test = [
          { args: ['1', '2', 'meters'], expect: '0.186' },
          { args: ['15', '25', 'meters'], expect: '34.839' },
        ]

        ref_test.forEach((test) => {
          expect(areaOfRectangle(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })

      it('should throw an error if the units input is neither feet nor meters', () => {
        const err_test = [
          { args: [1, 1, 1] },
          { args: [1, 1, 'bob'] },
        ]

        err_test.forEach((test) => {
          expect(areaOfRectangle).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('units must be either \'feet\' or \'meters\'')
        })
      })

      it('should throw an error if either the length or width are not parseable as digits', () => {
        const err_test = [
          { args: ['one', 1, 'feet'] },
          { args: [1, 'one', 'feet'] },
          { args: ['one', 'one', 'feet'] },
        ]

        err_test.forEach((test) => {
          expect(areaOfRectangle).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('length and width must be digits')
        })
      })

      it('should throw an error if inputs are null or undefined', () => {
        const err_test = [
          { args: [,,] },
          { args: [undefined,,] },
          { args: [, undefined,] },
          { args: [,, undefined] },
          { args: [,undefined, undefined] },
          { args: [undefined,, undefined] },
          { args: [undefined, undefined,] },
          { args: [undefined, undefined, undefined] },
          { args: [null,,] },
          { args: [, null,] },
          { args: [,, null] },
          { args: [null, null,] },
          { args: [null,, null] },
          { args: [,null, null] },
          { args: [null, null, null] },
        ]
        err_test.forEach((test) => {
          expect(areaOfRectangle).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('inputs must not be null or undefined')
        })
      })
    })

    describe('dimensions()', () => {
      it('shold produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1', '2'], expect: 'You entered dimensions of 1 feet by 2 feet.' },
          { args: ['15', '20'], expect: 'You entered dimensions of 15 feet by 20 feet.' },
        ]

        ref_test.forEach((test) => {
          expect(dimensions(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
      it('should throw an error if either the length or width are not parseable as digits', () => {
        const err_test = [
          { args: ['one', 1] },
          { args: [1, 'one'] },
          { args: ['one', 'one'] },
        ]

        err_test.forEach((test) => {
          expect(dimensions).withArgs(test.args[0], test.args[1]).to.throwError('length and width must be digits')
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
          expect(dimensions).withArgs(test.args[0], test.args[1]).to.throwError('inputs must not be null or undefined')
        })
      })
    })

    describe('sqft()', () => {
      it('shold produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1', '2'], expect: '2.000 square feet' },
          { args: ['15', '20'], expect: '300.000 square feet' },
        ]

        ref_test.forEach((test) => {
          expect(sqft(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
      it('should throw an error if either the length or width are not parseable as digits', () => {
        const err_test = [
          { args: ['one', 1] },
          { args: [1, 'one'] },
          { args: ['one', 'one'] },
        ]

        err_test.forEach((test) => {
          expect(sqft).withArgs(test.args[0], test.args[1]).to.throwError('length and width must be digits')
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
          expect(sqft).withArgs(test.args[0], test.args[1]).to.throwError('inputs must not be null or undefined')
        })
      })
    })

    describe('sqmeters()', () => {
      it('shold produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1', '2'], expect: '0.186 square meters' },
          { args: ['15', '20'], expect: '27.871 square meters' },
        ]

        ref_test.forEach((test) => {
          expect(sqmeters(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
      it('should throw an error if either the length or width are not parseable as digits', () => {
        const err_test = [
          { args: ['one', 1] },
          { args: [1, 'one'] },
          { args: ['one', 'one'] },
        ]

        err_test.forEach((test) => {
          expect(sqmeters).withArgs(test.args[0], test.args[1]).to.throwError('length and width must be digits')
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
          expect(sqmeters).withArgs(test.args[0], test.args[1]).to.throwError('inputs must not be null or undefined')
        })
      })
    })
  })
})

/*
  describe('exX.js', () => {
    it('should do something', () => {
      expect(1).to.equal(1)
      // something
    })

    it('should not do something', () => {
      expect(1).not.to.equal(2)
      // not something
    })
  })
*/
