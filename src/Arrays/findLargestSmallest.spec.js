//find the largest and smallest number in an unsorted integer array
function findLargestSmallest(array) {
    // create result object with largest and smallest property
    let result;
    if (array.length > 0) {
        // First element must consist of string or number
        if (!['string', 'number'].includes(typeof array[0])) {
            throw 'Input array must consist of integers or strings'
        }
        result = {smallest: array[0], largest: array[0]};
    } else {
        result = {smallest: null, largest: null};
        return result;
    }
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // Elements must consist of string or number
        if (!['string', 'number'].includes(typeof array[i])) {
            throw 'Input array must consist of integers or strings'
        }
        // if current element is smaller than smallest, replace smallest with current element
        if (String(array[i]).charCodeAt(0) <= String(result.smallest).charCodeAt(0)) {
            result.smallest = array[i];
        }
        // if current element is larger than largest, replace largest with current element
        if (String(array[i]).charCodeAt(0) >= String(result.largest).charCodeAt(0)) {
            result.largest = array[i];
        }
    }

    return result;
}

describe('findLargestSmallest', () => {
    it('returns an object the largest and smallest element', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expected = {smallest: 1, largest: 9};

        const result = findLargestSmallest(array);

        expect(result).toEqual(expected);
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
