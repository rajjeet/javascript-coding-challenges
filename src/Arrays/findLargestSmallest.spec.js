
function validateArrayForNumbersAndStrings(array) {
    for (let i = 0; i < array.length; i++) {
        if (!['string', 'number'].includes(typeof array[i])) {
            throw 'Input array must consist of integers or strings'
        }
    }
}

function initializeResults(array) {
    if (array.length > 0) {
        return {smallest: array[0], largest: array[0]};
    } else {
        return {smallest: null, largest: null};
    }
}

function stringifyArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(String(array[i]));
    }
    return result;
}

//find the largest and smallest number in an unsorted integer array
function findLargestSmallest(array) {

    validateArrayForNumbersAndStrings(array);
    const stringifiedArray = stringifyArray(array);
    let result = initializeResults(stringifiedArray);
    for (let i = 0; i < stringifiedArray.length; i++) {
        if (stringifiedArray[i] <= result.smallest) {
            result.smallest = stringifiedArray[i];
        }
        if (stringifiedArray[i] >= result.largest) {
            result.largest = stringifiedArray[i];
        }
    }
    return result;
}

describe('stringifyArray', () => {
    it('returns a stringified version of an array', () => {
        const array = [1, 2, 'a'];
        const expected = ['1', '2', 'a'];

        const result = stringifyArray(array);

        expect(result).toEqual(expected);
    });
});

describe('findLargestSmallest', () => {
    it('returns an object the largest and smallest element', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expected = {smallest: "1", largest: "9"};

        const result = findLargestSmallest(array);

        expect(result).toEqual(expected);
    });

    it('does not modify the input array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        findLargestSmallest(array);

        expect(array).toEqual(array);
    });

    it('does not mutate the input array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        findLargestSmallest(array);

        expect(array).toEqual(array);
    });

    it('returns an object the largest and smallest element, given an array with mixed data types', () => {
        const array = [1, 2, '$', 4, 5, 'b', 7, 8, 'a'];
        const expected = {smallest: '$', largest: 'b'};

        const result = findLargestSmallest(array);

        expect(result).toEqual(expected);
    });

    it('returns an object with largest and smallest as null', () => {
        const array = [];
        const expected = {smallest: null, largest: null};

        const result = findLargestSmallest(array);

        expect(result).toEqual(expected);
    });

    it('returns an object with largest and smallest that are the same given an array with single element', () => {
        const array = ['a'];
        const expected = {smallest: 'a', largest: 'a'};

        const result = findLargestSmallest(array);

        expect(result).toEqual(expected);
    });

    it('throws an error if first element isn\'t a number of string', () => {
        const array = [{id: 1}];

        expect(() => findLargestSmallest(array)).toThrowError();
    });

    it('throws an error if any element isn\'t a number of string', () => {
        const array = [1, 2, 3, {id: 1}];

        expect(() => findLargestSmallest(array)).toThrowError();
    });
});
