let list = [5, 2, 7, 6, 1, 9, 3];

function swap(leftPointer: number, rightPointer: number) {
    let temp_value = list[leftPointer];
    list[leftPointer] = list[rightPointer];
    list[rightPointer] = temp_value;
}

function partition(leftIndex: number, rightIndex: number): number {
    let pivotValue: number = list[rightIndex];
    let pivotFinalIndex = leftIndex;
    for (let i = leftIndex; i < rightIndex; i++) {
        if (list[i] < pivotValue) {
            swap(i, pivotFinalIndex);
            pivotFinalIndex++;
        }
    }
    swap(pivotFinalIndex, rightIndex);
    return pivotFinalIndex;
}

function quicksort(leftIndex: number, rightIndex: number) {
    if (leftIndex < rightIndex) {
        let pivotIndex = partition(leftIndex, rightIndex);
        quicksort(leftIndex, pivotIndex - 1);
        quicksort(pivotIndex + 1, rightIndex);
    }
}

quicksort(0, list.length - 1);
console.log(list);
