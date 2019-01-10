// Remove duplicates from an array in place
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                array[i] = null;
            }
        }
    }
    return array.filter(k => k !== null);
}

describe('removeDuplicates', () => {
    it('removes duplicates for ordered arrays', () => {
        const array = [1, 3, 4, 5, 5, 6];
        const expected = [1, 3, 4, 5, 6];

        const result = removeDuplicates(array);
        expect(result).toEqual(expected);
    });

    it('removes duplicates for unordered arrays', () => {
        const array = [5, 1, 3, 4, 5, 6];
        const expected = [1, 3, 4, 5, 6];

        const result = removeDuplicates(array);
        expect(result).toEqual(expected);
    });

    it('removes no duplicates for an arrays with unique elements', () => {
        const array = [5, 1, 3, 4, 6];

        const result = removeDuplicates(array);
        expect(result).toEqual(array);
    });

    it('returns empty array given empty input', () => {
        const array = [];

        const result = removeDuplicates(array);
        expect(result).toEqual(array);
    });

});