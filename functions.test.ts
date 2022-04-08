const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    const expected = []
    it('array matches array', () => {
      expect([shuffleArray]).toEqual(expect.arrayContaining(expected));
    });

    it('array does not match array', () => {
        expect([shuffleArray]).not.toEqual(expect.arrayContaining(expected));
      });
      
        
})
