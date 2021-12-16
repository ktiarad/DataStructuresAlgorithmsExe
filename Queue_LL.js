class Node {
    // Instantiate the node
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // Seeing the first value
    peek() {
        return this.first;
    }

    // Adding the value at the end of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            // For the first value, first = last = newNode
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; // Link the previous last to the newNode
            this.last = newNode; // The new last is the newNode
        }
        this.length++;
        return this;
    }

    // Remove the last value
    // Queue is FIFO, Fist In First Out
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null; // If the queue is only one, then the last value will be null after removed
        }

        const holdingPointer = this.first; // Optional, to keep the removed value
        this.first = this.first.next; // The previous first will be the (new) first of the queue
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.peek();
myQueue.dequeue();
console.log(myQueue);