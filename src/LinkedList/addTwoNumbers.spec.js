import {SinglyLinkedList} from "./SinglyLinkedList.spec";

function getNumberFromLinkedList(linkedList) {
    let node = linkedList.head;
    let nodeValues = [];
    while(node){
        nodeValues.push(node.value);
        node = node.next;
    }

    let joinedNodeValues = nodeValues
        .toString()
        .split(',')
        .join('');

    return parseInt(joinedNodeValues);
}

function convertNumberToLinkedList(number) {
    const numberInStringFormat = number.toString();
    let index = numberInStringFormat.length;
    let result = new SinglyLinkedList();
    while(index--){
        const character = numberInStringFormat.charAt(index);
        const parsedCharacter = parseInt(character);
        result.addToHead(parsedCharacter);
    }
    return result;
}

function addTwoNumbers(linkedList1, linkedList2) {
    const number1 = getNumberFromLinkedList(linkedList1);
    const number2 = getNumberFromLinkedList(linkedList2);
    const sum = number1 + number2;
    return convertNumberToLinkedList(sum);
}

describe('addTwoNumbers', () => {
    it('adds two linked lists of numbers', () => {
        const linkedList1 = new SinglyLinkedList(3);
        linkedList1.addToHead(6);
        linkedList1.addToHead(5);

        const linkedList2 = new SinglyLinkedList(2);
        linkedList2.addToHead(4);
        linkedList2.addToHead(8);

        const expected = new SinglyLinkedList(5);
        expected.addToHead(0);
        expected.addToHead(4);
        expected.addToHead(1);

        const result = addTwoNumbers(linkedList1, linkedList2);

        expect(result).toEqual(expected);

    })
});

describe('getNumberFromLinkedList', () => {
    it('returns number representation of a linked list', () => {
        const linkedList = new SinglyLinkedList(3);
        linkedList.addToHead(6);
        linkedList.addToHead(5);
        const expected = 563;

        const result = getNumberFromLinkedList(linkedList);

        expect(result).toEqual(expected);
    })
});

describe('convertNumberToLinkedList', () => {
    it('converts a number into a linked list', () => {
        const expected = new SinglyLinkedList(3);
        expected.addToHead(6);
        expected.addToHead(5);
        const number = 563;

        const result = convertNumberToLinkedList(number);

        expect(result).toEqual(expected);
    });
});