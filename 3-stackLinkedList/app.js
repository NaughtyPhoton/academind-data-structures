import {LinkedList} from "./LinkedList.js";

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        return this.list.deleteHead()?.value;
    }

    isEmpty() {
        return !this.list.head;
    }

    toArray() {
        return this.list.toArray();
    }
}

const myStack = new Stack();

myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');
myStack.push('5?');
myStack.push('6');
const popped = myStack.pop();

console.log(popped);

const h1 = document.createElement('h1');
const h1_2 = document.createElement('h1');
h1.innerText = myStack.toArray().join(', ');
h1_2.innerText = popped;

document.body.appendChild(h1);
document.body.appendChild(h1_2);

