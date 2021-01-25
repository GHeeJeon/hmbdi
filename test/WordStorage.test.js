const Word = require('../entity/Word');

describe('Get words', () => {

    function getWords() {
        const wordStorage = require('../storage/WordStorage');

        return wordStorage.getWords()
    }

    it('should give more than one words',  () => {
        const words = getWords();

       expect(words.length).toBeGreaterThan(0)
    });

    it('should give array of Word', () => {
        const words = getWords();

        expect(words).toBeInstanceOf(Array)

        for (const word of words) {
            expect(word).toBeInstanceOf(Word);
        }
    });
    
});