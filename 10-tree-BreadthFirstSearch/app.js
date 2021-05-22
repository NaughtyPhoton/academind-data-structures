class Node {
    constructor(value, parent = null) {
        this.children = [];
        this.parent = parent;
        this.value = value;
    }

    addNode(value) {
        const segments = value.split('/');

        if (!segments.length) return;
        if (segments.length === 1) {
            const node = new Node(segments[0], this);
            this.children.push(node);
            return {node, index: this.children.length - 1};
        }
        const existingChildNode = this.children.find(child => child.value === segments[0]);

        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'));
        } else {
            const node = new Node(segments[0], this);
            node.addNode(segments.slice(1).join('/'));
            this.children.push(node);
            return {node, index: this.children.length - 1};
        }
    }

    removeNode(value) {
        const segments = value.split('/');

        if (!segments) return;
        if (segments.length === 1) {
            const existingNodeIndex = this.children.findIndex(child => child.value === segments[0]);
            if (existingNodeIndex < 0) throw new Error('Could not find matching value: ' + segments[0]);
            this.children.splice(existingNodeIndex, 1);
        }

        if (segments.length > 1) {
            const existingChildNode = this.children.find(child => child.value === segments[0]);
            if (!existingChildNode) throw new Error('Could not find matching path: ' + segments[0]);

            existingChildNode.removeNode(segments.splice(1).join('/'));
        }
    }

    find(value) {
        // Breadth-First
        for (const child of this.children) {
            if (child.value === value) return child;
        }
        for (const child of this.children) {
            const nestedChildNode = child.find(value);
            if (nestedChildNode) {
                return nestedChildNode;
            }
        }
        throw new Error('Could not find node with value: ' + value);
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    add(path) {
        this.root.addNode(path);
    }

    remove(path) {
        this.root.removeNode(path);
    }

    find(value) {
        if (this.root.value === value) return this.root;
        return this.root.find(value);
    }
}

const filesystem = new Tree('/');
filesystem.add('personal/pictures/awesome.jpg');
filesystem.add('games/God of War.exe');

const foundFolder = filesystem.find('pictures');
const foundFile = filesystem.find('awesome.jpg');

const hi = '';

