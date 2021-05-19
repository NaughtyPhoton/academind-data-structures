const {LinkedList} = require("./LinkedList");

class Queue {
    constructor() {
        this.items = new LinkedList();
    }

    enqueue(value) {
        this.items.append(value);
    }

    dequeue() {
        const d = this.items.deleteHead();
        return d ? d.value : d;
    }

    isEmpty() {
        return !this.items.head;
    }

    toArray() {
        return this.items.toArray();
    }
}

const queue = new Queue();

queue.enqueue('nate dawg!');
console.log(queue.toArray().join(', '));
queue.enqueue('Garden!');
queue.enqueue('sophie!');

console.log(queue.toArray().join(', '));
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log(queue.toArray().join(', '));
queue.enqueue('sophie2!');
console.log(queue.toArray().join(', '));
