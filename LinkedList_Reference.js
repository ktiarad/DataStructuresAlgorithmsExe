// The concept of reference

let obj1 = { a : true };
let obj2 = obj1; // Referencing to obj1, not copying it

console.log('1', obj1); // 1 { a: true }
console.log('2', obj2); // 2 { a: true }

obj1.a = "yow"; // Change the property of a
console.log('1', obj1); // 1 { a: 'yow' }
console.log('2', obj2); // 2 { a: 'yow' } --> Referencing to obj1, because obj1.a has changed, so the obj2.a changes too

delete obj1;
console.log('1', obj1); // 1 { a: 'yow' }
console.log('2', obj2); // 2 { a: 'yow' }

// Although the obj1 is deleted, it still shows the value.
// Our computer will delete the memory which is not used. Obj2 still referencing to obj1 because there is a pointer.

delete obj1.a;
console.log('1', obj1); // 1 {}
console.log('2', obj2); // 2 {}

// After the property of obj1 is deleted, then the value is deleted.
// It must have something to do with the pointer.