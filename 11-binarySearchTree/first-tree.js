class Node {
    constructor(value, parent = null) {
        this.children = [];
        this.parent = parent;
        this.value = value;
    }

    addNode(value) {
        const node = new Node(value, this);
        this.children.push(node);
        return {node, index: this.children.length - 1};
    }

    removeNode(index) {
        this.children.splice(index, 1);
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }
}

const filesystem = new Tree('/');
const documentsNodeData = filesystem.root.addNode('/documents');
const gamesNodeData = filesystem.root.addNode('/games');

documentsNodeData.node.addNode('info.txt');
gamesNodeData.node.addNode('Warcraft.exe');

console.log(filesystem);
console.log(filesystem.root.children);
console.log(filesystem.root.children[0].children);


