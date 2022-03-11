const { it, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
};

it('uppercase test', (done) => {
    uppercase('test', (str) => {
        try {
            expect(str).toBe('TEST');
            done();
        }
        catch (error) {
            done(error);
        }
    });
});