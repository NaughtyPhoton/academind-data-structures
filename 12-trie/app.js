class TrieNode {
    constructor(value) {
        this.value = value;
        this.children = Array(26);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(key, value) {
        let node = this.root;
        for (let i = 0; i < key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0) - 97;
            if (!node.children[alphabetIndex]) {
                node.children[alphabetIndex] = new TrieNode();
            }
            node = node.children[alphabetIndex];
        }
        node.value = value;
    }

    find(key) {
        let node = this.root;
        for (let i = 0; i < key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0) - 97;

            if (!node.children[alphabetIndex]) return false;

            node = node.children[alphabetIndex];
        }
        return node;
    }

    remove(key) {
        const node = this.find(key);
        if (node) node.value = null;
    }
}

const trie = new Trie();
trie.insert('age', 30);
trie.insert('name', ['Nate']);
trie.insert('names', ['Sophie', 'Maxwell', 'Oliver']);
console.log(trie.find('names').value);
console.log(trie.find('name').value);
trie.remove('name');
console.log(trie.find('name').value);
console.log();
