// Find all pairs of an integer array whose sum is equal to a given number
function sumOfParts(array, number) {
    // initialize a result array that is an array of array
    let result = [];
    // iterator through array
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // throw error if array has any elements that are NaN
            if (typeof array[i] !== 'number' || typeof array[j] !== 'number') {
                throw ('Arrays must consist of only numbers');
            }
            const element = [array[i], array[j]].sort();
            // add the selected element with the rest of the elements
            // and compare if their sum equal to the input number
            if (
                i !== j
                && array[i] + array[j] === number
                && !result.some(e => e[0] === element[0] && e[1] === element[1])
            ) {
                // if match, the pair is pushed to a result array
                result.push(element);
            }
        }
    }
    // return result
    return result.sort((a, b) => a[0] - b[0]);
}


describe('sumOfParts', () => {
    it('finds the two pair of integers whose sum equal to a given number', () => {
        const array = [1, 3, 5, 6, 7, 8];
        const expected = [[1, 8], [3, 6]];

        const result = sumOfParts(array, 9);

        expect(result).toEqual(expected);
    });

    it('finds the two pair of integers whose sum equal to a given number with array that contains negative numbers', () => {
        const array = [-1, -3, 5, 6, 10, 12];
        const expected = [[-3, 12], [-1, 10]];

        const result = sumOfParts(array, 9);

        expect(result).toEqual(expected);
    });

    it('finds the two pair of integers whose sum equal to a given number with array that contains randomly ordered integers', () => {
        const array = [12, -1, -3, 10, 5, 6,];
        const expected = [[-3, 12], [-1, 10]];

        const result = sumOfParts(array, 9);

        expect(result).toEqual(expected);
    });

    it('finds the single pair of integers whose sum equal to a given number', () => {
        const array = [1, 3, 5, 6, 7];
        const expected = [[3, 6]];

        const result = sumOfParts(array, 9);

        expect(result).toEqual(expected);
    });

    it('finds the no pair of integers whose sum equal to a given number', () => {
        const array = [1, 3];
        const expected = [];

        const result = sumOfParts(array, 9);

        expect(result).toEqual(expected);
    });

    it('finds the no pair of integers whose sum equal to a given number', () => {
        const array = [1, 3, 5, '6', 7, 8];
        const expected = [];

        expect(() => sumOfParts(array, 9)).toThrow();
    });
});