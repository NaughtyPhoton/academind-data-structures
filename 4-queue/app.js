class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.unshift(value);
    }

    dequeue() {
        return this.items.pop();
    }

    isEmpty() {
        return !this.items.length;
    }

    toArray() {
        return this.items.slice();
    }
}

const queue = new Queue();

queue.enqueue('nate dawg');
queue.enqueue('Garden');
queue.enqueue('sophie');

console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.toArray());
