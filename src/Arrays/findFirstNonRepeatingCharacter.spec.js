// Find first non-repeating character in a string
function findFirstNonRepeatingCharacter(text) {
    // throw if input is not string
    if (typeof text !== "string") {
        throw "text must be a string";
    }

    // instantiate a "distinct" array that contains chars that only appeared once
    let distinct = [];
    const processedText = text.toLowerCase().trim();
    // iterate through the string elements
    for (let i = 0; i < processedText.length; i++) {
        // if the element is not in the "distinct" array, add it
        const char = processedText.charAt(i);
        if (!distinct.includes(char)) {
            distinct.push(char);
        } else {
            // if the element is in the "distinct" array, remove it
            distinct.splice(distinct.findIndex(e => e === char), 1);
        }
    }
    // return the first element from the "distinct" array
    return distinct[0];
}

describe('firstNonRepeatingCharacter', () => {
    it('returns the first non-repeating character in a string', () => {
        const result = findFirstNonRepeatingCharacter("swiss");
        expect(result).toEqual('w');
    });

    it('returns the first case-insensitive non-repeating character in a string', () => {
        const result = findFirstNonRepeatingCharacter("Swiss");
        expect(result).toEqual('w');
    });

    it('returns the first non-repeating character in a string, ignore leading whitespace', () => {
        const result = findFirstNonRepeatingCharacter(" swiss");
        expect(result).toEqual('w');
    });

    it('throws error if parameter is not a string', () => {
        expect(() => findFirstNonRepeatingCharacter(1)).toThrowError();
        expect(() => findFirstNonRepeatingCharacter({})).toThrowError();
        expect(() => findFirstNonRepeatingCharacter(undefined)).toThrowError();
        expect(() => findFirstNonRepeatingCharacter(null)).toThrowError();
    });
});