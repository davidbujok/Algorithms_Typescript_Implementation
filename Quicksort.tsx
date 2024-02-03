let list = [5,2,7,6,1,9,3]

function swap(leftPointer: number, pivot: number) {
  let temp_value = list[leftPointer]
  list[leftPointer] = list[pivot]
  list[pivot] = temp_value
}
function SortableArray(leftPointer: number, pivot_point: number) {

  let pivotPosition: number = pivot_point
  let pivot: number = list[pivotPosition]
  

  let rightPointer: number = pivot_point - 1

  while (true) {
    while (leftPointer <= rightPointer && list[leftPointer] < pivot) {
      leftPointer += 1;
    }
    while (rightPointer >= leftPointer && list[rightPointer] > pivot) {
      rightPointer -= 1;
    }
    if (leftPointer >= rightPointer) {
      break;
    } else {
      swap(leftPointer, rightPointer);
      leftPointer += 1;
      rightPointer -= 1;
    }
  }
  swap(leftPointer, pivotPosition);
  return leftPointer;
}


function quicksort(leftIndex: number, rightIndex: number) {

  if ( rightIndex - leftIndex <= 0 ) {
    return
  }

  let pivotPosition = SortableArray(leftIndex, rightIndex);

  quicksort(leftIndex, pivotPosition - 1)
  quicksort(pivotPosition + 1, rightIndex)
  
}

quicksort(0, 6)
console.log(list);



