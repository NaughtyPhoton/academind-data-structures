class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = {value, next: null};
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;

        if (!this.head) this.head = newNode;
    }

    prepend(value) {
        this.head = {value, next: this.head};
        if (!this.tail) this.tail = this.head;
    }

    toArray() {
        const elements = [];
        let currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return elements;
    }

    insertAfter(value, afterValue) {
        const newNode = {value: afterValue, next: null};
        const foundNode = this.find(value);
        if (foundNode) {
            if (foundNode !== this.tail) {
                newNode.next = foundNode.next;
            }
            foundNode.next = newNode;
            return true;
        } else return false;
    }

    find(value) {
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) throw new Error('List already empty');

        let currentNode = this.head;

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    deleteHead() {
        if (!this.head) return null;
        const deletedItem = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return deletedItem;
    }
}

module.exports = {LinkedList};
