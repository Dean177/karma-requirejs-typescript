///<reference path="./definitions/jasmine.d.ts" />
///<reference path="../module-aliases.d.ts" />
import exampleFunc = require('example/exampleFunc');

describe('exampleFunc', () => {

    it('Runs tests written in typescript', () => {
        var result = exampleFunc(2);

        expect(result).toBe(4);
    });
});

