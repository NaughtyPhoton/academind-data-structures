class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.first = null;
    }

    insert(value, priority = -Infinity) {
        const newNode = new Node(value, priority);
        if (!this.first || priority > this.first.priority) {
            newNode.next = this.first;
            this.first = newNode;
        } else {
            let currentNode = this.first;

            while (currentNode.next && priority < currentNode.next.priority) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    }

    dequeue() {
        const result = this.first;
        this.first = this.first.next;
        return result.value;
    }

    toString() {
        const values = [];
        let current = this.first;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values.join(' => ');
    }
}


const queue = new PriorityQueue();
queue.insert('Do a dance');
queue.insert('Pet Sophie', 5);
queue.insert('Eat spaghetti', 3);
queue.insert('cool');
queue.insert('first', 10);

console.log(`My Priority Queue: ${queue}`);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(`My Priority Queue: ${queue}`);
