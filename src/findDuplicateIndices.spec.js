// Find the duplicate number on a given integer array
function findDuplicateIndices(array) {
    // create array to hold distinct values
    let distinct = [];
    // create array to hold duplicate values
    let duplicates = [];
    // iterate through input array
    for (let i = 0; i < array.length; i++) {
        if (distinct.includes(array[i])) {
            // if value is "distinct" array, add to "duplicate" array
            duplicates.push(array[i]);
        } else {
            // if value is not in "distinct" array, add to "distinct" array
            distinct.push(array[i]);
        }
    }
    // return duplicate array
    return duplicates.sort();
}

describe('findDuplicateIndices', () => {
    it('finds correct single duplicate pair in array', () => {
        const array = [1, 2, 3, 4, 4, 5];
        const expected = [4];

        const duplicates = findDuplicateIndices(array);

        expect(duplicates).toEqual(expected);
    });

    it('finds 2 correct duplicate pairs in array', () => {
        const array = [1, 2, 'a', 'a', 3, 4, 4, 5];

        const duplicates = findDuplicateIndices(array);

        expect(duplicates).toHaveLength(2);
        expect(duplicates).toContain(4);
        expect(duplicates).toContain('a');
    });

    it('returns duplicates that are sorted', () => {
        const array = [1, 2, 3, 'z', 'z', 'a', 'a', 5];
        const expected = ['a', 'z'];

        const duplicates = findDuplicateIndices(array);

        expect(duplicates).toEqual(expected);
    });

    it('returns empty duplicate array given no duplicates', () => {
        const array = [1, 2, 3, 'z', 'a', 5];
        const expected = [];

        const duplicates = findDuplicateIndices(array);

        expect(duplicates).toEqual(expected);
    });
});
