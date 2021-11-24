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
    }
}

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

    // Append value so the value will be added at the end of the list
    append(value) {
        const newNode = { // Put the new value to const named newNode
            value: value,
            next: null // --> Will be the tail
        };
        this.tail.next = newNode; // The tail.next will be added with newNode. Remember in constructor, this.tail = this.head
        // ^ If you change into this.head.next = newNode, the result will be same
        this.tail = newNode; // Change the value of the tail
        this.length++; // Added the length of the list
        return this;
    }
    
    // Append new value to the first of the list
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head; // The newNode will be pointing to this.head since it will be the beginning of the list
        this.head = newNode; // Change the value of this.head 
        this.length++;
        return this;
    }

    // Insert new value into desired index
    insert(index, value) {
        // Checking parameters
        if (index >= this.length) {
            return this.append(value); // Just append the value to the end of the list
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1); // Get the previous value of the desired index
        console.log("leader : ");
        console.log(leader);
        const holdingPointer = leader.next; // Get the rest of the list
        leader.next = newNode; // Put the newNode after the leader
        newNode.next = holdingPointer; // Put the rest of the list after the newNode
        this.length++;
    }

    remove(index) {
        // Checking parameters
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next; // The unwanted node is next to the leader
        leader.next = unwantedNode.next; // Put the rest (next to the unwanted node) to the leader
        this.length--; // Decrese the length of the list since it is removed
        return this;
    }

    // Get the previous value of the desired index
    traverseToIndex(index) {
        // Check params
        let counter = 0;
        let currentNode = this.head; // Reference to the head
        while (counter !== index) {
            // console.log("current node in traversion with counter " + counter + " : ");
            // console.log(currentNode.next);
            currentNode = currentNode.next; // Keep going on the list while the counter is lower than the index
            counter++;
        }
        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            return this.head; // If the list only has one node, just return the head
        }
        let first = this.head; // Variable first to store the head
        this.tail = this.head; // The tail will have the head value; the head will be the tail
        let second = first.next; // Variable second to store the node next to the variable first
        while(second) {
            const temp = second.next; // Temp to store the node next to the variable second
            second.next = first; // Let the variable secont points to variable first
            first = second; // Variable first will have variable second value
            second = temp; // Variable second will have variable temp value
            // this.printListArr(first);
            console.log("first : " + first.value + ", second : " + first.next.value);
        }
        this.head.next = null; // The head hasn't changed and still pointing to second node, so we want it to point to null because it will be the last node
        console.log("head next : " + this.head.value);
        this.head = first; // Variable first will be the last node, so the head will be in the last node
        console.log("head value now : " + this.head.value);
        return this.printList();
    }

    printListArr(list) {
        // Printing list as array
        const array = [];
        let currentNode = list; // --> Our list!
        while (currentNode != null) {
            array.push(currentNode.value); // Push value of currentNode to array
            currentNode = currentNode.next; // Go to the next node
        }
        console.log(array);
        return array;
    }

    printList() {
        // Printing list as array
        const array = [];
        let currentNode = this.head; // --> Our list!
        while (currentNode != null) {
            array.push(currentNode.value); // Push value of currentNode to array
            currentNode = currentNode.next; // Go to the next node
        }
        console.log(array);
        return array;
    }
}

let myLinkedList = new LinkedList(1); // LinkedList { head: { value: 10, next: null }, tail: { value: 10, next: null }, length: 1 }
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
// myLinkedList.prepend(2);
// myLinkedList.printList();
// myLinkedList.printList();
// myLinkedList.append(1);
// myLinkedList.append(15);
// myLinkedList.prepend(8);
// myLinkedList.append(8);
// myLinkedList.append(19);
// myLinkedList.append(2);
myLinkedList.printList();
// myLinkedList.insert(4,100);
// myLinkedList.remove(5);
myLinkedList.reverse();
myLinkedList.printList();