/* eslint no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */
/* global describe, it */

const expect = require('expect.js')

const {
  dimensions,
  sqft,
  sqmeters,
  areaOfRectangle,
} = require('../ch3/ex7.js')

const {
  remainingPieces,
  piecesPerPerson,
  aboutTheParty,
  pluralizer,
} = require('../ch3/ex8.js')

const {
  paintCalculator,
  dimensions_paint,
} = require('../ch3/ex9.js')

const {
  selfCheckout,
  itemSubtotal,
  billSubtotal,
  tax,
  total,
  isStringedNumber,
  outputBuilder,
} = require('../ch3/ex10.js')

const {
  calculateConversion,
  checkInput,
  buildConversion,
} = require('../ch3/ex11.js')

const {
  simpleInterest,
  checkSIinputs,
  buildSIstring,
} = require('../ch3/ex12.js')

const {
  compound_interest,
  checkCIinputs,
  buildCIstring,
} = require('../ch3/ex13.js')

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

  describe('ex8.js', () => {
    describe('pluralizer()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['people', '1'], expect: 'person' },
          { args: ['people', '2'], expect: 'people' },
          { args: ['people', '3'], expect: 'people' },
          { args: ['pizzas', '1'], expect: 'pizza' },
          { args: ['pizzas', '2'], expect: 'pizzas' },
          { args: ['pizzas', '3'], expect: 'pizzas' },
          { args: ['pieces', '1'], expect: 'piece' },
          { args: ['pieces', '2'], expect: 'pieces' },
          { args: ['pieces', '3'], expect: 'pieces' },
        ]

        ref_test.forEach((test) => {
          expect(pluralizer(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })

      it('should throw an error if the type is not one of [\'people\', \'pizzas\', \'pieces\']', () => {
        const err_test = [
          { args: ['one', '1'] },
          { args: [null, '1'] },
          { args: [undefined, '1'] },
        ]

        err_test.forEach((test) => {
          expect(pluralizer).withArgs(test.args[0], test.args[1]).to.throwError('type must be one of [\'person\', \'pizzas\', \'pieces\']')
        })
      })

      it('should throw an error if the val is not a parseable integer digit provided as a string', () => {
        const err_test = [
          { args: ['people', '1.2'] },
          { args: ['people', '123.456'] },
          { args: ['people', 1.2] },
          { args: ['people', 123.456] },
          { args: ['people', 1] },
          { args: ['people', 2] },
          { args: ['people', 3] },
        ]

        err_test.forEach((test) => {
          expect(pluralizer).withArgs(test.args[0], test.args[1]).to.throwError('val must be a parseable integer digit')
        })
      })
    })

    describe('aboutTheParty()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1', '1', '1'], expect: '1 person with 1 pizza, each pizza having 1 piece' },
          { args: ['8', '1', '1'], expect: '8 people with 1 pizza, each pizza having 1 piece' },
          { args: ['8', '2', '1'], expect: '8 people with 2 pizzas, each pizza having 1 piece' },
          { args: ['8', '1', '4'], expect: '8 people with 1 pizza, each pizza having 4 pieces' },
          { args: ['9', '1', '4'], expect: '9 people with 1 pizza, each pizza having 4 pieces' },
        ]

        ref_test.forEach((test) => {
          expect(aboutTheParty(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })

      it('should throw an error if the arguments are not provided as strings', () => {
        const err_test = [
          { args: [1, '1', '1'] },
          { args: ['1', 1, '1'] },
          { args: ['1', '1', 1] },
          { args: [1, 1, '1'] },
          { args: [1, '1', 1] },
          { args: ['1', 1, 1] },
          { args: [1, 1, 1] },
        ]

        err_test.forEach((test) => {
          expect(aboutTheParty).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('arguments to this function must be provided as strings')
        })
      })

      it('should throw an error if the arguments are not parseable integer digits', () => {
        const err_test = [
          { args: [, '1', '1'] },
          { args: ['one', '1', '1'] },
          { args: [null, '1', '1'] },
          { args: [undefined, '1', '1'] },
          { args: ['1',, '1'] },
          { args: ['1', 'one', '1'] },
          { args: ['1', null, '1'] },
          { args: ['1', undefined, '1'] },
          { args: ['1', '1',] },
          { args: ['1', '1', 'one'] },
          { args: ['1', '1', null] },
          { args: ['1', '1', undefined] },
          { args: ['1',,] },
          { args: [, '1',] },
          { args: [,, '1'] },
          { args: ['1', null, null] },
          { args: ['1', undefined, undefined] },
          { args: [null, '1', null] },
          { args: [undefined, '1', undefined] },
          { args: [null, null, '1'] },
          { args: [undefined, undefined, '1'] },
          { args: [,,] },
          { args: [null, null, null] },
          { args: [undefined, undefined, undefined] },
        ]

        err_test.forEach((test) => {
          expect(aboutTheParty).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('arguments must be parseable integer digits')
        })
      })
    })

    describe('piecesPerPerson()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['8', '2', '8'], expect: 'Each person gets 2 pieces of pizza.' },
          { args: ['8', '2', '9'], expect: 'Each person gets 2 pieces of pizza.' },
          { args: ['6', '2', '9'], expect: 'Each person gets 3 pieces of pizza.' },
          { args: ['6', '2', '8'], expect: 'Each person gets 2 pieces of pizza.' },
        ]

        ref_test.forEach((test) => {
          expect(piecesPerPerson(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })

      it('should throw an error if the arguments are not provided as strings', () => {
        const err_test = [
          { args: [1, '1', '1'] },
          { args: ['1', 1, '1'] },
          { args: ['1', '1', 1] },
          { args: [1, 1, '1'] },
          { args: [1, '1', 1] },
          { args: ['1', 1, 1] },
          { args: [1, 1, 1] },
        ]

        err_test.forEach((test) => {
          expect(aboutTheParty).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('arguments to this function must be provided as strings')
        })
      })

      it('should throw an error if the arguments are not parseable integer digits', () => {
        const err_test = [
          { args: [, '1', '1'] },
          { args: ['one', '1', '1'] },
          { args: [null, '1', '1'] },
          { args: [undefined, '1', '1'] },
          { args: ['1',, '1'] },
          { args: ['1', 'one', '1'] },
          { args: ['1', null, '1'] },
          { args: ['1', undefined, '1'] },
          { args: ['1', '1',] },
          { args: ['1', '1', 'one'] },
          { args: ['1', '1', null] },
          { args: ['1', '1', undefined] },
          { args: ['1',,] },
          { args: [, '1',] },
          { args: [,, '1'] },
          { args: ['1', null, null] },
          { args: ['1', undefined, undefined] },
          { args: [null, '1', null] },
          { args: [undefined, '1', undefined] },
          { args: [null, null, '1'] },
          { args: [undefined, undefined, '1'] },
          { args: [,,] },
          { args: [null, null, null] },
          { args: [undefined, undefined, undefined] },
        ]

        err_test.forEach((test) => {
          expect(aboutTheParty).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('arguments must be parseable integer digits')
        })
      })
    })

    describe('remainingPieces()', () => {
      it('should provide outputs equal to reference', () => {
        const ref_test = [
          { args: ['8', '2', '9'], expect: 'There are 2 leftover pieces.' },
          { args: ['3', '1', '7'], expect: 'There is 1 leftover piece.' },
        ]

        ref_test.forEach((test) => {
          expect(remainingPieces(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })

      it('should throw an error if the arguments are not provided as strings', () => {
        const err_test = [
          { args: [1, '1', '1'] },
          { args: ['1', 1, '1'] },
          { args: ['1', '1', 1] },
          { args: [1, 1, '1'] },
          { args: [1, '1', 1] },
          { args: ['1', 1, 1] },
          { args: [1, 1, 1] },
        ]

        err_test.forEach((test) => {
          expect(aboutTheParty).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('arguments to this function must be provided as strings')
        })
      })

      it('should throw an error if the arguments are not parseable integer digits', () => {
        const err_test = [
          { args: [, '1', '1'] },
          { args: ['one', '1', '1'] },
          { args: [null, '1', '1'] },
          { args: [undefined, '1', '1'] },
          { args: ['1',, '1'] },
          { args: ['1', 'one', '1'] },
          { args: ['1', null, '1'] },
          { args: ['1', undefined, '1'] },
          { args: ['1', '1',] },
          { args: ['1', '1', 'one'] },
          { args: ['1', '1', null] },
          { args: ['1', '1', undefined] },
          { args: ['1',,] },
          { args: [, '1',] },
          { args: [,, '1'] },
          { args: ['1', null, null] },
          { args: ['1', undefined, undefined] },
          { args: [null, '1', null] },
          { args: [undefined, '1', undefined] },
          { args: [null, null, '1'] },
          { args: [undefined, undefined, '1'] },
          { args: [,,] },
          { args: [null, null, null] },
          { args: [undefined, undefined, undefined] },
        ]

        err_test.forEach((test) => {
          expect(aboutTheParty).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('arguments must be parseable integer digits')
        })
      })
    })
  })

  describe('ex9.js', () => {
    describe('dimensions_paint()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1', '350'], expect: 350 },
          { args: ['1', '360'], expect: 360 },
        ]

        ref_test.forEach((test) => {
          expect(dimensions_paint(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })

      it('should throw an error if the argument is not a parseable number provided as a string', () => {
        const err_test = [
          { args: ['1', 'three hundred fifty'] },
          { args: ['three hundred fifty', '1'] },
          { args: ['1', '1.2.3'] },
          { args: ['1.2.3', '1'] },
          { args: ['1', ''] },
          { args: ['', '1'] },
          { args: ['1', undefined] },
          { args: [undefined, '1'] },
          { args: ['1', null] },
          { args: [null, '1'] },
        ]

        err_test.forEach((test) => {
          expect(dimensions_paint).withArgs(test.args[0], test.args[1]).to.throwError('sqft must be a parseable number provided as a string')
        })
      })
    })

    describe('paintCalculator()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1', '350'], expect: 1 },
          { args: ['1', '360'], expect: 2 },
        ]

        ref_test.forEach((test) => {
          expect(paintCalculator(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })

      it('should throw an error if the argument is not a parseable number provided as a string', () => {
        const err_test = [
          { args: ['1', 'three hundred fifty'] },
          { args: ['three hundred fifty', '1'] },
          { args: ['1', '1.2.3'] },
          { args: ['1.2.3', '1'] },
          { args: ['1', ''] },
          { args: ['', '1'] },
          { args: ['1', undefined] },
          { args: [undefined, '1'] },
          { args: ['1', null] },
          { args: [null, '1'] },
        ]

        err_test.forEach((test) => {
          expect(paintCalculator).withArgs(test.args[0], test.args[1]).to.throwError('sqft must be a parseable number provided as a string')
        })
      })
    })
  })

  describe('ex10.js', () => {
    describe('itemSubtotal()', () => {
      it('should produce outpus equal to reference', () => {
        const ref_test = [
          { args: ['1.00', '1'], expect: 1.00 },
          { args: ['2.00', '1'], expect: 2.00 },
          { args: ['2.00', '4'], expect: 8.00 },
          { args: ['2.02', '4'], expect: 8.08 },
        ]

        ref_test.forEach((test) => {
          expect(itemSubtotal(test.args[0], test.args[1])).to.eql(test.expect)
        })
      })
    })

    describe('billSubtotal()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: [1.00, 2.00, 3.00], expect: '6.00' },
          { args: [1.00, 2.32, 3.75], expect: '7.07' },
        ]

        ref_test.forEach((test) => {
          expect(billSubtotal(test.args)).to.equal(test.expect)
        })
      })
    })

    describe('tax()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: 100.00, expect: '5.50' },
          { args: 101.00, expect: '5.55' },
          { args: 3.64, expect: '0.20' },
        ]

        ref_test.forEach((test) => {
          expect(tax(test.args)).to.eql(test.expect)
        })
      })
    })

    describe('total()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: [100.00, 5.50], expect: '105.50' },
          { args: [101.00, 5.55], expect: '106.55' },
          { args: [3.64, 0.20], expect: '3.84' },
        ]

        ref_test.forEach((test) => {
          expect(total(test.args[0], test.args[1])).to.eql(test.expect)
        })
      })
    })

    describe('isStringedNumber()', () => {
      it('should return true on valid inputs', () => {
        const valid_input = [
          { args: ['1', 'money'] },
          { args: ['1.24', 'money'] },
          { args: ['100.39', 'money'] },
          { args: ['1', 'quantity'] },
          { args: ['10', 'quantity'] },
        ]

        valid_input.forEach((test) => {
          expect(isStringedNumber(test.args[0], test.args[1])).to.be.ok()
        })
      })

      it('should throw an error if type is not in [\'money\', \'quantity\']', () => {
        const err_test = [
          { args: ['1', 'bob'] },
          { args: ['1', null] },
          { args: ['1', undefined] },
        ]

        err_test.forEach((test) => {
          expect(isStringedNumber).withArgs(test.args[0], test.args[1]).to.throwError('type must be one of [\'money\', \'quantity\']')
        })
      })

      it('should throw an error if the price is neither an integer or number with two decimal places, provided as a string', () => {
        const err_test = [
          { args: ['1.2.3', 'money'] },
          { args: ['one dollar, 25 cents', 'money'] },
          { args: [1.24, 'money'] },
          { args: [1, 'money'] },
          { args: [null, 'money'] },
          { args: [undefined, 'money'] },
        ]

        err_test.forEach((test) => {
          expect(isStringedNumber).withArgs(test.args[0], test.args[1]).to.throwError('price must be a string digit, either as an integer, or with two decimal places')
        })
      })

      it('should throw an error if the quantity is not an integer delivered as a string', () => {
        const err_test = [
          { args: ['1.2.3', 'quantity'] },
          { args: ['one hundred 25', 'quantity'] },
          { args: ['1.24', 'quantity'] },
          { args: [1, 'quantity'] },
          { args: [null, 'quantity'] },
          { args: [undefined, 'quantity'] },
        ]

        err_test.forEach((test) => {
          expect(isStringedNumber).withArgs(test.args[0], test.args[1]).to.throwError('quantity must be a string integer')
        })
      })
    })

    describe('outputBuilder()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          { args: ['1.00', '1.00', '1.00'], expect: 'Subtotal: $1.00\nTax: $1.00\nTotal: $1.00' },
        ]

        ref_test.forEach((test) => {
          expect(outputBuilder(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })
    })

    describe('selfCheckout()', () => {
      it('should produce outputs equal to reference', () => {
        const ref_test = [
          {
            args: {
              item1: { price: '1', qty: '1', },
              item2: { price: '1', qty: '1', },
              item3: { price: '1', qty: '1', },
            },
            expect: 'Subtotal: $3.00\nTax: $0.17\nTotal: $3.17'
          }, {
            args: {
              item1: { price: '2.31', qty: '31', },
              item2: { price: '9.99', qty: '1', },
              item3: { price: '1000', qty: '13', },
            },
            expect: 'Subtotal: $13081.60\nTax: $719.49\nTotal: $13801.09'
          },
        ]

        ref_test.forEach((test) => {
          expect(selfCheckout(test.args)).to.equal(test.expect)
        })
      })

      it('should throw an error if the input object does not contain exactly three items with keys [\'item1\', \'item2\', \'item3\']', () => {
        const err_test = [
          {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', qty: '2', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', qty: '2', },
              item4: { price: '20', qty: '2', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', qty: '2', },
              item3: { price: '20', qty: '2', },
              item4: { price: '20', qty: '2', },
            },
          },
        ]

        err_test.forEach((test) => {
          expect(selfCheckout).withArgs(test.args).to.throwError('input must be an object with three properties such that input.keys() === [\'item1\', \'item2\', \'item3\']')
        })
      })

      it('should throw an error if the items contain anything other than a price and qty', () => {
        const err_test = [
          {
            args: {
              item1: { price: '20', },
              item2: { price: '20', qty: '2', },
              item3: { price: '20', qty: '2', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', },
              item3: { price: '20', qty: '2', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', qty: '2', },
              item3: { price: '20', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', color: 'blue' },
              item2: { price: '20', qty: '2', },
              item3: { price: '20', qty: '2', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', qty: '2', color: 'blue' },
              item3: { price: '20', qty: '2', },
            },
          }, {
            args: {
              item1: { price: '20', qty: '2', },
              item2: { price: '20', qty: '2', },
              item3: { price: '20', qty: '2', color: 'blue' },
            },
          },
        ]

        err_test.forEach((test) => {
          expect(selfCheckout).withArgs(test.args).to.throwError('each item must have a price and qty and no other properties')
        })
      })
    })
  })

  describe('ex11.js', () => {
    describe('calculateConversion()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [81, 137.51, 98.24], expect: '113.38' },
          { args: [1, 1, 1], expect: '1.00' },
          { args: [2, 2, 2], expect: '2.00' },
        ]

        ref_test.forEach((test) => {
          expect(calculateConversion(test.args[0], test.args[1], test.args[2]))
            .to.equal(test.expect)
        })
      })

      it('should produce erros on invalid inputs', () => {
        let err_test = [
          { args: ['1.23', 1, 1] },
          { args: [1, '1.23', 1] },
          { args: [1, 1, '1.23'] },
          { args: ['1.2.3.', 1, 1] },
          { args: [1, '1.2.3.', 1] },
          { args: [1, 1, '1.2.3.'] },
          { args: ['abc.', 1, 1] },
          { args: [1, 'abc.', 1] },
          { args: [1, 1, 'abc.'] },
        ]

        err_test.forEach((test) => {
          expect(calculateConversion).withArgs(test.args[0], test.args[1], test.args[2]).to.throwError('all inputs must be numeric')
        })
      })
    })

    describe('checkInput()', () => {
      it('should return `true` on valid input', () => {
        let true_test = [
          { args: '111' },
          { args: '1.11' },
        ]

        true_test.forEach((test) => {
          expect(checkInput(test.args)).to.be.ok()
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
          expect(checkInput).withArgs(test.args).to.throwError('input amount must be delivered as a string')
        })
      })

      it('should throw error if the input is not parseable to a number', () => {
        let err_test = [
          { args: 'one two three' },
          { args: '1.2.3' },
        ]

        err_test.forEach((test) => {
          expect(checkInput).withArgs(test.args).to.throwError('input must be parseable as a number')
        })
      })
    })

    describe('buildConversion()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['81', '137.51'], expect: '81 euros at an exchange rate of 137.51 is 113.38 US dollars' },
          { args: ['1', '137.51'], expect: '1 euros at an exchange rate of 137.51 is 1.40 US dollars' },
        ]

        ref_test.forEach((test) => {
          expect(buildConversion(test.args[0], test.args[1])).to.equal(test.expect)
        })
      })
    })
  })

  describe('ex12.js', () => {
    describe('simpleInterest()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [1500, 4.3, 4], expect: '1758.00' },
        ]

        ref_test.forEach((test) => {
          expect(simpleInterest(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })
    })

    describe('checkSIinputs()', () => {
      it('should return `true` on valid inputs', () => {
        let true_test = [
          { args: '111' },
          { args: '1.11' },
        ]

        true_test.forEach((test) => {
          expect(checkSIinputs(test.args)).to.be.ok()
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
          expect(checkSIinputs).withArgs(test.args).to.throwError('input amount must be delivered as a string')
        })
      })

      it('should throw error if the input is not parseable to a number', () => {
        let err_test = [
          { args: 'one two three' },
          { args: '1.2.3' },
        ]

        err_test.forEach((test) => {
          expect(checkSIinputs).withArgs(test.args).to.throwError('input must be parseable as a number')
        })
      })
    })

    describe('buildSIstring()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['1500', '4.3', '4'], expect: 'After 4 years at 4.3%, the investment will be worth $1758.00.' },
        ]

        ref_test.forEach((test) => {
          expect(buildSIstring(test.args[0], test.args[1], test.args[2])).to.equal(test.expect)
        })
      })
    })
  })

  describe('ex13.js', () => {
    describe('compound_interest()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: [1500, 4.3, 6, 4], expect: '1938.84' },
        ]

        ref_test.forEach((test) => {
          expect(compound_interest(test.args[0], test.args[1],test.args[2],test.args[3]))
            .to.equal(test.expect)
        })
      })
    })

    describe('checkCIinputs()', () => {
      it('should return `true` on valid inputs', () => {
        let true_test = [
          { args: '111' },
          { args: '1.11' },
        ]

        true_test.forEach((test) => {
          expect(checkCIinputs(test.args)).to.be.ok()
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
          expect(checkCIinputs).withArgs(test.args).to.throwError('input amount must be delivered as a string')
        })
      })

      it('should throw error if the input is not parseable to a number', () => {
        let err_test = [
          { args: 'one two three' },
          { args: '1.2.3' },
        ]

        err_test.forEach((test) => {
          expect(checkCIinputs).withArgs(test.args).to.throwError('input must be parseable as a number')
        })
      })
    })

    describe('buildCIstring()', () => {
      it('should produce values equal to reference', () => {
        let ref_test = [
          { args: ['1500', '4.3', '6', '4'], expect: '$1500 invested at 4.3% for 6 years compounded 4 times per year is $1938.84' },
        ]

        ref_test.forEach((test) => {
          expect(buildCIstring(test.args[0], test.args[1], test.args[2], test.args[3]))
            .to.equal(test.expect)
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
