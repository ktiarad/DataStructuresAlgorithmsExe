// The structure of LinkedList is as follows
firstLinkedList = {
    head: {
        value: 8,
        next: { // --> Next refers to the next value of the list
            value: 10,
            next: {
                value: 7,
                next: null // --> This is the tail, because the next is null
            }
        }
    }
};

class LinkedList {
    // Initialize the Linked List
    constructor(value) {
        this.head = {
            value: value,
            next: null // For initalizing Linked List, the next is null
        };
        this.tail = this.head; // For initializing Linked List, tail = head
        this.length = 1;
    }
}

let myLinkedList = new LinkedList(10); // LinkedList { head: { value: 10, next: null }, tail: { value: 10, next: null }, length: 1 }
console.log(myLinkedList);