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

class Node {
    // Class for instantiate newNode, optional
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // Doubly LinkedList has pointer for "previous"
    }
}

class DoublyLinkedList {
    // Initialize the Linked List
    constructor(value) {
        this.head = {
            value: value,
            next: null, // For initalizing Linked List, the next is null
            prev: null
        };
        this.tail = this.head; // For initializing Linked List, tail = head
        this.length = 1;
    }

    // Append value so the value will be added at the end of the list
    append(value) {
        const newNode = { // Put the new value to const named newNode
            value: value,
            next: null, // --> Will be the tail
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode; // The last tail will be added with newNode
        this.tail = newNode; // Remember that 
        this.length++; // Added the length of the list
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head; // --> Our list!
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }
    
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        // Checking parameters
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        follower.prev = newNode;
        newNode.next = follower;
        this.length++;
        console.log(this);
    }

    remove(index) {
        // Checking parameters
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        // Check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myLinkedList = new DoublyLinkedList(10); // LinkedList { head: { value: 10, next: null }, tail: { value: 10, next: null }, length: 1 }
myLinkedList.append(7);
myLinkedList.append(1);
myLinkedList.prepend(8);
myLinkedList.insert(2,3);
myLinkedList.printList();
// console.log(myLinkedList);
