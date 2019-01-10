// Find the duplicate number on a given integer array
function findDuplicateIndices(array) {
    let distinct = [];
    let duplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (distinct.includes(array[i])) {
            duplicates.push(array[i]);
        } else {
            distinct.push(array[i]);
        }
    }
    return duplicates.sort();
}

describe('findDuplicateIndices', () => {
    it('finds correct single duplicate pair in array', () => {
        const array = [1, 2, 3, 4, 4, 5];
        const expected = [4];

        const duplicates = findDuplicateIndices(array);

        expect(duplicates).toEqual(expected);
    });

    it('doesn\'t mutate the input array', () => {
        const array = [1, 2, 3, 4, 4, 5];

        findDuplicateIndices(array);

        expect(array).toEqual(array);
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
