// Check if a given linked list contains a cycle
import {SinglyLinkedList} from "./SinglyLinkedList.spec";

function checkForCycle(linkedList) {
    const headNode = linkedList.head;
    let currentNode;

    if (headNode.next !== null) {
        currentNode = headNode.next;
    } else {
        return false;
    }

    while (currentNode.next !== null) {
        if (currentNode.next === headNode) {
            return true;
        } else {
            currentNode = currentNode.next;
        }
    }
    return false;
}

describe('checkForCycle', () => {
    describe('3 node linked list', () => {

        let linkedList;
        beforeEach(() => {
            linkedList = new SinglyLinkedList(10);
            linkedList.addToHead(20);
            linkedList.addToHead(30);
        });

        it('returns false when cycle does not exists ', () => {
            const result = checkForCycle(linkedList);

            expect(result).toBe(false);
        });

        it('returns true when cycle exists', () => {
            linkedList.toCyclic();

            const result = checkForCycle(linkedList);

            expect(result).toBe(true);
        });
    });


    describe('1 node linked list', () => {
        let linkedList;
        beforeEach(() => {
            linkedList = new SinglyLinkedList(10);
        });

        it('returns false when cycle does not exists', () => {
            const result = checkForCycle(linkedList);

            expect(result).toBe(false);

        });

        it('returns true when cycle exists', () => {
            linkedList.toCyclic();

            const result = checkForCycle(linkedList);

            expect(result).toBe(true);
        });
    });


});