const { any } = jasmine;
const debracketify = require('../../');

describe('debracketify', function () {
    it('is a function', function () {
        expect(debracketify).toEqual(any(Function));
    });

    it('returns a string', function () {
        expect(debracketify()).toEqual(any(String));
    });

    it('returns the extracted bracket enclosed string', function () {
        expect(debracketify('[Example]')).toBe('Example');
    });

    it('returns the value provided if it only begins with a bracket', function () {
        expect(debracketify('[Example')).toBe('[Example');
    });

    it('returns the value provided if it only ends with a bracket', function () {
        expect(debracketify('Example]')).toBe('Example]');
    });

    it('returns an empty string if provided only a pair of brackets', function () {
        expect(debracketify('[]')).toBe('');
    });

    it('returns the value provided if it is not a string', function () {
        expect(debracketify(5)).toBe(5);
    });
});
