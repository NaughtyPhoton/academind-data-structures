class Node {
    constructor(value, parent = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }

    add(value) {
        if (this.value === value) return;
        if (this.value === null) {
            this.value = value;
            return;
        }

        if (this.value < value) {
            if (this.right) {
                this.right.add(value);
                return;
            }
            this.right = new Node(value, this);
        } else {
            if (this.left) {
                this.left.add(value);
                return;
            }
            this.left = new Node(value, this);
        }
    }

    remove(value) {
        const identifiedNode = this.find(value);
        if (!identifiedNode) throw new Error('Could not find node with value ' + value);

        if (!identifiedNode.left && !identifiedNode.right) {
            identifiedNode.parent.removeChild(identifiedNode);
        } else if (identifiedNode.left && identifiedNode.right) {
            const nextBiggerNode = identifiedNode.right.findNext();
            if (nextBiggerNode.value !== identifiedNode.right.value) {
                this.remove(nextBiggerNode.value);
                identifiedNode.value = nextBiggerNode.value;

            } else {
                identifiedNode.value = identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;
            }
        } else {
            const childNode = identifiedNode.left || identifiedNode.right;
            identifiedNode.left = childNode.left;
            identifiedNode.right = childNode.root;
            identifiedNode.value = childNode.value;
        }

        if (identifiedNode.left) {
            identifiedNode.left.parent = identifiedNode;
        }
        if (identifiedNode.right) {
            identifiedNode.right.parent = identifiedNode;
        }
    }

    removeChild(node) {
        if (this.left === node) this.left = null;
        else if (this.right === node) this.right = null;
    }

    find(value) {
        if (this.value === value) return this;
        if (this.value < value && this.right) return this.right.find(value);
        if (this.value > value && this.left) return this.left.find(value);
    }

    findNext() {
        if (!this.left) {
            return this;
        }

        return this.left.findNext();
    }
}

class Tree {
    constructor() {
        this.root = new Node(null);
    }

    add(value) {
        this.root.add(value);
    }

    remove(value) {
        this.root.remove(value);
    }

    find(value) {
        return this.root.find(value);
    }
}

const tree = new Tree();
tree.add(10);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(25);
tree.add(5);
tree.add(1);
tree.add(101);
tree.add(50);
tree.add(20);
tree.add(51);
tree.add(2);

console.log(tree);
console.log(tree.find(6));
console.log(tree.find(8));
tree.remove(2);
tree.remove(6);
console.log(tree);
