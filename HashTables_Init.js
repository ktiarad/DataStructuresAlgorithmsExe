// Creating object for hash tables
let user = {
    age: 53,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('aww!');
    }
}

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream();
user;

// Creating map for hash tables
const a = new Map();

// Creating set
const b = new Set(); // Store unique values