class Stack {
    // Instantiate the array
    constructor() {
        this.array = [];
    }

    // Seeing the last value of array
    peek() {
        return this.array[this.array.length-1];
    }

    // Adding the value at the end of the array
    push(value) {
        this.array.push(value); // The function .push is available in JS
        return this;
    }

    // Remove the last value
    pop() {
        this.array.pop(); // The function .pop is available in JS
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