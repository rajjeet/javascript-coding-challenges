function validateArrayForNumbers(array){
    array.forEach(element => {
        if (typeof element !== 'number') {
            throw ('Arrays must consist of only numbers');
        }
    });
}
// Find all pairs of an integer array whose sum is equal to a given number
function sumOfParts(array, number) {
    let result = [];
    validateArrayForNumbers(array);
    for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
        for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
            const element = [array[outerIndex], array[innerIndex]].sort();
            if (
                outerIndex !== innerIndex
                && array[outerIndex] + array[innerIndex] === number
                && !result.some(e => e[0] === element[0] && e[1] === element[1])
            ) {
                result.push(element);
            }
        }
    }
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