// Reverse an array in place
function reverseArray(array) {

    // iterate through array
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        // replace n element with array length - n in place without temp variable
        // X = X - Y
        array[i] = array[i] - array[array.length - 1 - i];
        // Y = X + Y
        array[array.length - 1 - i] = array[i] + array[array.length - 1 - i];
        // X = Y - X
        array[i] = array[array.length - 1 - i] - array[i];
    }
    return array;
}

describe('reverseArray', () => {
    it('reverses an array with even length', () => {
        const array = [1, 2, 3, 4, 5, 6];
        const expected = [6, 5, 4, 3, 2, 1];

        const result = reverseArray(array);
        expect(result).toEqual(expected);

    });

    it('reverses an array with odd length', () => {
        const array = [1, 2, 3, 4, 5];
        const expected = [5, 4, 3, 2, 1];

        const result = reverseArray(array);
        expect(result).toEqual(expected);

    });

    it('returns a valid result for an array with single element', () => {
        const array = [1];

        const result = reverseArray(array);
        expect(result).toEqual(array);

    });

    it('returns a valid result for an array with no element', () => {
        const array = [];

        const result = reverseArray(array);
        expect(result).toEqual(array);

    });
});