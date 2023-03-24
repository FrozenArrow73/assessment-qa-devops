const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test("tests that shuffleArray returns an result of equal length", () => {
        expect(shuffleArray([1, 2, 3, 4, 5])).toHaveLength(5)
    })
    test("tests that shuffleArray returns an array", () => {
        expect(shuffleArray([1, 2, 3, 4, 5])).toBeInstanceOf(Array)
    })

})