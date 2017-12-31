/* eslint no-undef: "off", no-sparse-arrays: "off", comma-spacing: "off", comma-dangle: "off" */

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
