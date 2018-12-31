// Integer array sorted in place using the quicksort algorithm (Assuming correct input)
function quickSort(array) {

    let leftIndex = 0;
    let rightIndex = array.length - 1;
    let temp;
    let pivotIndex = Math.floor(Math.random() * array.length);

    // if array is empty, return empty array
    if (array.length === 0 || array === null || array === undefined) {
        return array;
    }

    do {
        // Move from left most index towards the pivot until a larger number is found or the pivot is reached
        while (array[leftIndex] < array[pivotIndex] && leftIndex < pivotIndex) {
            leftIndex++;
        }
        // Move from right most index towards the pivot until a smaller number is found or the pivot is reached
        while (array[rightIndex] > array[pivotIndex] && rightIndex > pivotIndex) {
            rightIndex--;
        }
        // If left or right index equal to pivot, change the pivot index to keep track of it
        if (leftIndex === pivotIndex) {
            pivotIndex = rightIndex;
        } else if (rightIndex === pivotIndex) {
            pivotIndex = leftIndex;
        }
        // Swap left and right index
        temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
    }
        // Repeat previous steps until the left and right index converge to become the pivot index
    while (leftIndex !== pivotIndex || rightIndex !== pivotIndex)

    // Redo the do loop above for left and right side of pivot and return the finished array
    let leftArray;
    let rightArray;
    let leftArraySorted;
    let rightArraySorted;

    if (array.length > 1) {
        leftArray = array.slice(0, pivotIndex);
        leftArraySorted = quickSort(leftArray);
        rightArray = array.slice(pivotIndex + 1, array.length);
        rightArraySorted = quickSort(rightArray);
        return [...leftArraySorted, array[pivotIndex], ...rightArraySorted];
    } else {
        return array;
    }
}

describe('quickSort', () => {

    it('sorts an array of integers greater than 2 using quicksort', () => {
        const array = [5, 9, 1, 8, 2, 7, 3, 6, 4];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const result = quickSort(array, 2);
        expect(result).toEqual(expected);
    });

    it('sorts an array of integers with length of 2 using quicksort', () => {
        const array = [2, 1];
        const expected = [1, 2];

        const result = quickSort(array);
        expect(result).toEqual(expected);
    });

    it('sorts an array of integers with length of 1 using quicksort', () => {
        const array = [1];
        const expected = [1];

        const result = quickSort(array);
        expect(result).toEqual(expected);
    });

    it('returns any empty array when input is an empty array', () => {
        const array = [];
        const expected = [];

        const result = quickSort(array);
        expect(result).toEqual(expected);
    });
});