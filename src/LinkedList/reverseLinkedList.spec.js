import {SinglyLinkedList} from "./SinglyLinkedList.spec";

// Reverse a singly linked list without recursion
function reverseLinkedList(linkedList){
    let values = [];
    let node = linkedList.head;
    while(node){
        values.push(node.value);
        node = node.next;
    }
    const reversedLinkedList = new SinglyLinkedList();
    values.forEach(element => reversedLinkedList.addToHead(element));
    return reversedLinkedList;
}

describe('reverseLinkedList', () => {
    it('reverses a linked list with 3 nodes', () => {
        const linkedList = new SinglyLinkedList(10);
        linkedList.addToHead(20);
        linkedList.addToHead(30);

        const result = reverseLinkedList(linkedList);

        expect(result.head.value).toEqual(10);
        expect(result.head.next.next.value).toEqual(30);
    });

    it('does not modify the input linked list', () => {
        const linkedList = new SinglyLinkedList(10);
        linkedList.addToHead(20);
        linkedList.addToHead(30);

        var clone = JSON.parse(JSON.stringify(linkedList));

        reverseLinkedList(linkedList);

        expect(linkedList).toEqual(clone);
    });
});