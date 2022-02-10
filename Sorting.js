const numbers = [99, 44, 6, 2, 10, 8, 19, 201, 0, 8, 7];

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i ++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j+1]) {
                // Swap number
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // Set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i+1; j < length; j++) {
            if (array[j] < array[min]) {
                // Update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // Move number to the first position
            array.unshift(array.splice(i,1)[0]);
        }
        else {
            // Find where number should go
            for (let j = 1; j < 1; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    // Move number to the right spot
                    array.splice(j, 0, array.splice(i,1)[0]);
                }
            }
        }
    }
}

function insertionSort2(array) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
    }
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    // Split array into right and left
    const length = array.length;
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    // console.log('left:', left);
    // console.log('right:', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // console.log(left, right)

    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
     
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
  
//Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);


// bubbleSort(numbers);
selectionSort(numbers);
// insertionSort(numbers);
// console.log(insertionSort(numbers));
// console.log(mergeSort(numbers));
// insertionSort2(numbers);
// quickSort(numbers);
console.log(numbers);