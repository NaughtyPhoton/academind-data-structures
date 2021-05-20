class HashTable {
    BUCKET_SIZE = 100;

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
        let keyHash = this.hash(key);
        if (this.buckets[keyHash] === null || this.buckets[keyHash][0] === key) {
            this.buckets[keyHash] = [key, value];
        } else {
            while (this.buckets[keyHash] !== null) {
                keyHash++;
            }
            this.buckets[keyHash] = [key, value];
        }
    }


    get(key) {
        const keyHash = this.hash(key);
        for (let i = keyHash; keyHash < this.buckets.length; i++) {
            if (!this.buckets[i]) {
                continue;
            }
            if (this.buckets[i][0] === key) {
                return this.buckets[i][0];
            }
        }
        return undefined;
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


