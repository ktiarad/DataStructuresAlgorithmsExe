letter = ['c', 'h', 'f', 'r', 't', 'a', 'd', 'k'];
number = [5, 19, 8, 9, 20, 21, 2, 1];

console.log(letter.sort());
console.log(number.sort()); // sorted by ASCII

console.log(number.sort(function(a, b) {
    return a - b;
}));