// Creating Hash Tables in our own
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // Get the address memory of the value
    _hash(key) { // --> The underscore means that it is the private properties which can't be accessed out of the class
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; // charCodeAt return integer between 0-65535 in UTF-16
        }
        return hash;
    }

    // Insert value for hash table
    set(key, value) {
        let address = this._hash(key); // Store the address
        if (!this.data[address]) {
            this.data[address] = []; // Create array if empty  
        }
        this.data[address].push([key,value]); // Push array in address
        return this.data;
    }

    // Return the value of specific key
    get(key) {
        let address = this._hash(key); // Store the address
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) { // Index 0 because the key is stored in index 0
                    console.log(currentBucket[i][1]); // Index 1 because the value is stored in index 1
                    return currentBucket[i][1];
                }
            }
        }
        return undefined; // If currentBucket is empty, just return undefined
    }

    // Iterate in all keys
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]); // Get the key by accessing [0] inside [0]. If only get [0], the value of the key will be added too
            }
        }
        console.log(keysArray);
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 98);
myHashTable.set('apples',29);
myHashTable.set('oranges',9);
myHashTable.get('apples');
myHashTable.keys();