

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return [...this.items];
    }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(10);
myStack.push(11);
myStack.push(12);
myStack.push(1022);

const num1 = myStack.pop();
const num2 = myStack.pop();

console.log(myStack.toArray(), num1, num2);
