define(["require", "exports", 'example/exampleFunc'], function (require, exports, exampleFunc) {
    describe('exampleFunc', function () {
        it('Runs tests written in typescript', function () {
            var result = exampleFunc(2);
            expect(result).toBe(4);
        });
    });
});
