class HashTable {
    BUCKET_SIZE = 16;

    constructor() {
        this.buckets = Array(this.BUCKET_SIZE).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.BUCKET_SIZE;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.buckets[keyHash] = value;
    }


    get(key) {
        return this.buckets[this.hash(key)];
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}

// function findFirstRepeating(str) {
//     const table = new HashTable();
//     for (const char of str) {
//         if (table[char]) {
//             return char;
//         }
//         table[char] = 1;
//     }
//     table.showInfo();
// }
//
// console.log(findFirstRepeating('Helloo!'));

const table1 = new HashTable();
for (const char of 'Sophie Maxwell Oliver') {
    table1.set(char, char);
}
table1.showInfo();


