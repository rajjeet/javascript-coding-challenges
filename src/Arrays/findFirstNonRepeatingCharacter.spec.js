// Find first non-repeating character in a string
function findFirstNonRepeatingCharacter(text) {
    if (typeof text !== "string") {
        throw "text must be a string";
    }

    let distinct = [];
    const processedText = text.toLowerCase().trim();
    for (let i = 0; i < processedText.length; i++) {
        const char = processedText.charAt(i);
        if (!distinct.includes(char)) {
            distinct.push(char);
        } else {
            distinct.splice(distinct.findIndex(e => e === char), 1);
        }
    }

    const indexToReturn = 0;
    return distinct[indexToReturn];
}

describe('firstNonRepeatingCharacter', () => {
    it('returns the first non-repeating character in a string', () => {
        const result = findFirstNonRepeatingCharacter("swiss");
        expect(result).toEqual('w');
    });

    it('does not mutate the input text', () => {
        const text = "swiss";
        findFirstNonRepeatingCharacter(text);
        expect(text).toEqual(text);
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