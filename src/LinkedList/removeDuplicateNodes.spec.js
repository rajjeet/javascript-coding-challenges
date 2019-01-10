// Remove duplicate nodes in an unsorted linked list
import {SinglyLinkedList} from "./SinglyLinkedList.spec";

function nullifyDuplicates(values) {
    const distinctValues = [];
    values.forEach((element, index) => {
        if (distinctValues.includes(element)) {
            values[index] = null;
        } else {
            distinctValues.push(element);
        }
    });
    return values;
}

function convertLinkedListToArray(linkedList) {
    let node = linkedList.head;
    let array = [];
    while (node) {
        array.push(node.value);
        node = node.next;
    }
    return array;
}

function removeLinkedNodesWithNullifiedIndices(linkedList, arrayWithNullIndicies) {
    let node = linkedList.head;
    let previousNode = null;
    let currentIndex = 0;
    while (node) {

        if (arrayWithNullIndicies[currentIndex] === null) {
            previousNode.next = node.next;
        } else {
            previousNode = node;
        }

        currentIndex++;
        node = node.next;
    }
    return linkedList;
}

function removeDuplicateNodes(linkedList) {
    const values = convertLinkedListToArray(linkedList);
    const nullifiedIndices = nullifyDuplicates(values);
    return removeLinkedNodesWithNullifiedIndices(linkedList, nullifiedIndices);
}

describe('nullifyDuplicates', () => {
    it('converts duplicates to null', () => {
        const array = [10, 70, 10, 40, 10];
        const expected = [10, 70, null, 40, null];

        const result = nullifyDuplicates(array);

        expect(result).toEqual(expected);
    });
});

describe('convertLinkedListToArray', () => {
    it('converts linked list into array with each node value in sequence', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);

        const result = convertLinkedListToArray(linkedList);

        expect(result).toEqual([70, 10, 40]);
    });
});

describe('removeLinkedNodesWithNullifiedIndices', () => {
    it('selectively removes linked list nodes with null indices', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);

        const nullIndices = [1, null, 1];

        const result = removeLinkedNodesWithNullifiedIndices(linkedList, nullIndices);

        expect(result.head.value).toEqual(70);
        expect(result.head.next.value).toEqual(40);
    });
});

describe('removeDuplicateNodes', () => {
    it('removes duplicates in a 4-node unsorted linked list', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);
        linkedList.addToHead(10);

        const result = removeDuplicateNodes(linkedList);

        expect(result.head.value).toEqual(10);
        expect(result.head.next.value).toEqual(70);
        expect(result.head.next.next.value).toEqual(40);
    });

    it('removes nothing from a 4-node unsorted linked list without duplicates', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);
        linkedList.addToHead(20);

        const result = removeDuplicateNodes(linkedList);

        expect(result.head.value).toEqual(20);
        expect(result.head.next.value).toEqual(70);
        expect(result.head.next.next.value).toEqual(10);
        expect(result.head.next.next.next.value).toEqual(40);
    });
});