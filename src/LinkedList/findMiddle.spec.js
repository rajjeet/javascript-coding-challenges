// Find the middle element of a singly linked list in one pass
import {SinglyLinkedList} from "./SinglyLinkedList.spec";

function findMiddle(linkedList) {
    // iterate through the linked list
    let node = linkedList.head;
    // keep track of middle node on each iteration
    let middleNode = node;
    let iteration = 0;

    while(node.next !== null){
        // increment middleNode on each other iteration
        if (iteration % 2 === 0){
            middleNode = middleNode.next;
        }
        node = node.next;
        iteration++;
    }
    // return middle node once linked list ends and only if linked list has odd number of nodes
    return iteration % 2 === 0 ? middleNode : null;
}

describe('findMiddle', () => {

    it('finds the middle element given a linkedlist with 3 nodes', () => {
        const linkedList = new SinglyLinkedList(10);
        linkedList.addToHead(20);
        linkedList.addToHead(30);

        const result = findMiddle(linkedList);

        expect(result.value).toEqual(20);
    });

    it('finds no middle element given a linkedlist an even number of nodes', () => {
        const linkedList = new SinglyLinkedList(10);
        linkedList.addToHead(20);
        linkedList.addToHead(30);
        linkedList.addToHead(40);

        const result = findMiddle(linkedList);

        expect(result).toEqual(null);
    });

    it('returns the only node given a linkedlist with 1 node', () => {
        const linkedList = new SinglyLinkedList(10);

        const result = findMiddle(linkedList);

        expect(result.value).toEqual(10);
    });
});
