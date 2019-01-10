// Find Nth Node from the end of a singly linked list

import {SinglyLinkedList} from "./SinglyLinkedList.spec";

function findLengthOfLinkedList(linkedList) {
    let node = linkedList.head;
    let length = 0;
    while(node){
        length++;
        node = node.next;
    }
    return length;
}

function findNthNodeFromEnd(linkedList, numberFromEnd) {
    const length = findLengthOfLinkedList(linkedList);
    let node = linkedList.head;
    let linkedListIndex = 0;
    while(node){
        const nodeCountFromEnd = length - linkedListIndex;
        if (nodeCountFromEnd === numberFromEnd){
            return node;
        }
        linkedListIndex++;
        node = node.next;
    }
    return null;
}

describe('findNthValueFromEnd', () => {
    it('finds the third node from the end of a singly 4-node linked list', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);
        linkedList.addToHead(20);

        const result = findNthNodeFromEnd(linkedList, 3);

        expect(result.value).toEqual(70);
    });

    it('returns null when the end index from a singly linked list is invalid length', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);
        linkedList.addToHead(20);

        const result = findNthNodeFromEnd(linkedList, 5);

        expect(result).toEqual(null);

    });
});

describe('findLengthOfLinkedList', () => {
    it('correctly finds the length of a 3-node singly linked list', () => {
        const linkedList = new SinglyLinkedList(40);
        linkedList.addToHead(10);
        linkedList.addToHead(70);

        const result = findLengthOfLinkedList(linkedList);

        expect(result).toEqual(3);
    });
});