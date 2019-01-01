export class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
    }

    addToHead(value) {
        this.head = {
            value: value,
            next: this.head
        };
    }

    popFromHead() {
        const result = this.head.value;
        let nextValue, nextNext;
        if (!this.head.next) {
            nextValue = null;
            nextNext = null;
        } else {
            nextValue = this.head.next.value;
            nextNext = this.head.next.next
        }
        this.head = {
            value: nextValue,
            next: nextNext
        };
        return result;
    }

    findFirst(value) {
        let node = this.head;
        while (node.value !== value) {
            if (node.next === null) {
                return null;
            } else {
                node = node.next;
            }
        }
        return node;
    }

    remove(value) {
        let node = this.head;
        let previousNode = null;
        let nextNode = this.head.next;

        while (node.value !== value) {
            if (node.next === null) {
                return null;
            } else {
                previousNode = node;
                if (node.next.next !== null) {
                    nextNode = node.next.next;
                } else {
                    nextNode = null
                }
                node = node.next;
            }
        }
        if (previousNode) {
            previousNode.next = nextNode;
        } else {
            this.head = nextNode;
        }
        return node;
    }

    toCyclic() {
        let node = this.head;
        while (node.next !== null) {
            if (node.next === this.head) {
                return;
            } else {
                node = node.next;
            }
        }
        node.next = this.head;
    }
}

describe('SinglyLinkedList class', () => {

    it('returns a head with a single value when instantiated', () => {
        const linkedList = new SinglyLinkedList(10);

        expect(linkedList.head.value).toEqual(10);
    });

    describe('addToHead method', () => {

        it('adds a node to head', () => {
            const linkedList = new SinglyLinkedList(10);

            linkedList.addToHead(20);

            expect(linkedList.head.value).toEqual(20);
        });

        it('removes a node to head', () => {
            const linkedList = new SinglyLinkedList(10);

            linkedList.addToHead(20);
            const result = linkedList.popFromHead();

            expect(linkedList.head.value).toEqual(10);
            expect(result).toEqual(20);
        });
    });

    describe('popFromHead method', () => {

        it('removes a node to head with 1 node', () => {
            const linkedList = new SinglyLinkedList(10);

            const result = linkedList.popFromHead();

            expect(linkedList.head.value).toEqual(null);
            expect(result).toEqual(10);
        });

        it('returns null when two values are popped from a 1 node linked list', () => {
            const linkedList = new SinglyLinkedList(10);

            linkedList.popFromHead();
            const result = linkedList.popFromHead();

            expect(result).toEqual(null);
        });
    });

    describe('findFirst method', () => {

        it('finds an item in 3 node linked list if it exists', () => {
            const linkedList = new SinglyLinkedList(10);
            linkedList.addToHead(20);
            linkedList.addToHead(30);

            const result = linkedList.findFirst(20);

            expect(result.value).toEqual(20);
            expect(result.next.value).toEqual(10);
        });

        it('returns null if when value is not found', () => {
            const linkedList = new SinglyLinkedList(10);

            const result = linkedList.findFirst(20);

            expect(result).toEqual(null);
        });
    });

    describe('remove method', () => {
        describe('when linked list has 3 nodes', () => {

            let linkedList;
            beforeEach(() => {
                linkedList = new SinglyLinkedList(10);
                linkedList.addToHead(20);
                linkedList.addToHead(30);
            });

            it('removes a node in the middle of a linked list and links previous and next node correctly', () => {
                const result = linkedList.remove(20);

                expect(result.value).toEqual(20);
                expect(linkedList.head.next.value).toEqual(10);
            });

            it('removes a node at the end of the linked list', () => {
                const result = linkedList.remove(10);

                expect(result.value).toEqual(10);
                expect(linkedList.head.next.next).toEqual(null);
            });

            it('removes a node at the start of the linked list', () => {
                const result = linkedList.remove(30);

                expect(result.value).toEqual(30);
                expect(linkedList.head.value).toEqual(20);
            });

            it('removes nothing', () => {
                const result = linkedList.remove(40);

                expect(result).toEqual(null);
                expect(linkedList.head.value).toEqual(30);
                expect(linkedList.head.next.value).toEqual(20);
                expect(linkedList.head.next.next.value).toEqual(10);
                expect(linkedList.head.next.next.next).toEqual(null);
            });

            it('removes first matching node only', () => {
                linkedList.addToHead(20);

                const result = linkedList.remove(20);

                expect(result.value).toEqual(20);
                expect(linkedList.head.next.value).toEqual(20);
            });
        });

        describe('when linked list has 1 node', () => {
            let linkedList;
            beforeEach(() => {
                linkedList = new SinglyLinkedList(10);
            });

            it('works', () => {
                const result = linkedList.remove(10);

                expect(result.value).toEqual(10);
                expect(linkedList.head).toEqual(null);
            });
        });


    });

    describe('convertToCyclic method', () => {
        let linkedList;
        beforeEach(() => {
            linkedList = new SinglyLinkedList(10);
            linkedList.addToHead(20);
            linkedList.addToHead(30);
        });

        it('converts 3 node singly linked list to cyclic form', () => {
            linkedList.toCyclic();

            expect(linkedList.head.value).toEqual(30);
            expect(linkedList.head.next.next.next).toEqual(linkedList.head);
        });

        it('finishes running if linkedlist is already cyclic', () => {
            linkedList.toCyclic();
            linkedList.toCyclic();

            expect(linkedList.head.value).toEqual(30);
            expect(linkedList.head.next.next.next).toEqual(linkedList.head);
        });
    });

})
;