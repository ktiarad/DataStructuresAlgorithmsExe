let counter = 0;

function inception() {
    if (counter >= 3) {
        return 'done!';
    }
    counter++;
    // console.log(counter);
    return inception();
}

// console.log(inception());


function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number-1);
} // O(n^2)
// console.log(findFactorialRecursive(5));

function findFactorialIteration(number) {
    factorial = 1;
    for(i = 2; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
// console.log(findFactorialIteration(5));

// Fibonacci : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    console.log("n-1: ", n-1, ", n-2: ", n-2);
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(8));

function fibonacciIterative(n) {
    
}

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    
    if(array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString('yoyo master');

function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');