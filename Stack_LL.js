class Node {
    // Instantiate the node
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // Seeing the top of the stack
    peek() {
        return this.top;
    }

    // Adding new value at the top of the stack
    push(value) {
        const newNode = new Node(value); // Create new node
        if (this.length === 0) {
            // For the first value in stack, first = bottom
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top; // `holdingPointer` as temp variable
            this.top = newNode; // The new top is the new node
            this.top.next = holdingPointer; // The previous top will be the next of the top
        }
        this.length++;
        return this;
    }

    // Remove the top value
    // Stack is LIFO, Last In First Out
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null; // If the stack consists one value, then the bottom is null; then the top will be null too because this.top.next = this.bottom (line 47)
        }
        const holdingPointer = this.top; // Optional, to keep the removed value
        this.top = this.top.next; // The new top is the next current top
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.peek();
myStack.pop();
console.log(myStack);