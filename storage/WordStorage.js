const Word = require('../entity/Word');
const fs = require('fs');

class WordStorage {
    constructor({wordsFilePath: dataFilePath}) {
        this.dataFilePath = dataFilePath;
    }

    getWords() {
        return this._readFromDataFile();
    }

    _readFromDataFile() {
        const lines = this._readAllLinesFromDataFile();

        function transformLineIntoWordInstance(line) {
            const [rawWord, rawMeanings] = line.split(':');

            return new Word({
                word: rawWord.trim(),
                meanings: splitTextByCommaAndTrimEachOfThem(rawMeanings)
            });
        }

        function splitTextByCommaAndTrimEachOfThem(text) {
            return text.split(',').map((each) => each.trim());
        }

        function lineShouldNotBeEmpty(line) {
            return line.length > 0;
        }

        function lineShouldIncludeColon(line) {
            return line.includes(':');
        }

        function lineShouldIncludeContentsBeforeAndAfterColon(line) {
            const [before, after] = line.split(':').map((part) => part.trim());

            return !!before && !!after;
        }

        return lines
            .filter(lineShouldNotBeEmpty)
            .filter(lineShouldIncludeColon)
            .filter(lineShouldIncludeContentsBeforeAndAfterColon)
            .map(transformLineIntoWordInstance);
    }

    _readAllLinesFromDataFile() {
        const rawFileContent = fs.readFileSync(this.dataFilePath);

        return rawFileContent.toString().split('\n');
    }
}

const wordStorage = new WordStorage({
    wordsFilePath: __dirname + '/words.txt'
});

module.exports = wordStorage;