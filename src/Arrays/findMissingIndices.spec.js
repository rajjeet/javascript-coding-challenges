// Given a complete and incomplete array, find the missing values
function findMissingIndices(completeArray, arrayWithMissingIndex){

    let result = [];
    for (let i = 0; i < completeArray.length; i++) {
        let exists = false;
        for (let j = 0; j < arrayWithMissingIndex.length; j++){
            if (completeArray[i] === arrayWithMissingIndex[j]){
                exists = true;
            }
        }
        if (!exists){
            result.push(completeArray[i]);
        }
    }
    return result;
}

describe('findMissingIndices', () => {
    it('finds correct result with 1 missing index', () => {
        const completeArray = [1, 2, 3, 4];
        const arrayWithMissingIndex = [1, 2, 4];
        const expected = [3];
        let result = findMissingIndices(completeArray, arrayWithMissingIndex);

        expect(result).toEqual(expected);
    });

    it('does not modify the input arrays', () => {
        const completeArray = [1, 2, 3, 4];
        const arrayWithMissingIndex = [1, 2, 4];

        findMissingIndices(completeArray, arrayWithMissingIndex);

        expect(completeArray).toEqual(completeArray);
        expect(arrayWithMissingIndex).toEqual(arrayWithMissingIndex);
    });

    it('finds correct result with 2 missing index', () => {
        const completeArray = [1, 2, 3, 4];
        const arrayWithMissingIndex = [1, 2];
        const expected = [3, 4];
        let result = findMissingIndices(completeArray, arrayWithMissingIndex);

        expect(result).toEqual(expected);
    });

    it('finds correct result with 0 missing index', () => {
        const completeArray = [1, 2, 3, 4];
        const arrayWithMissingIndex = [1, 2, 3, 4];
        const expected = [];
        let result = findMissingIndices(completeArray, arrayWithMissingIndex);

        expect(result).toEqual(expected);
    });

    it('finds correct result with mixed datatypes', () => {
        const completeArray = [1, 2, 'a', 4];
        const arrayWithMissingIndex = [1, 2, 4];
        const expected = ['a'];
        let result = findMissingIndices(completeArray, arrayWithMissingIndex);

        expect(result).toEqual(expected);
    });

    it('finds correct result with empty', () => {
        const completeArray = [];
        const arrayWithMissingIndex = [];
        const expected = [];
        let result = findMissingIndices(completeArray, arrayWithMissingIndex);

        expect(result).toEqual(expected);
    });

});

