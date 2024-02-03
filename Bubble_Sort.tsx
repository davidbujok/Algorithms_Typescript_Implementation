const bubbleSort = (listOfNumbers: number[]) => {

  let swap = true
  let counter = 0

  while (swap === true) {
    swap = false
    for (let i=0; i<listOfNumbers.length; i++) {
      counter += 1 
      if (listOfNumbers[i] > listOfNumbers[i+1]) {
        let smaller = listOfNumbers[i+1]
        listOfNumbers[i+1] = listOfNumbers[i]
        listOfNumbers[i] = smaller
        swap = true
      } 
    }
  }
  return [ listOfNumbers, counter ]
}

console.log(bubbleSort([4, 2, 7, 1, 3]));


const bubbleSortSecond = (listOfNumbers: number[]) => {

  let unsortedUntilIndex: number = listOfNumbers.length - 1
  let sorted: boolean = false 
  let counter: number = 0

  while (!sorted) {
    sorted = true
    for (let i=0; i<unsortedUntilIndex; i++) {
      counter += 1 
      if (listOfNumbers[i] > listOfNumbers[i+1]) {
        sorted = false
        let hold = listOfNumbers[i]
        listOfNumbers[i] = listOfNumbers[i+1]
        listOfNumbers[i+1] = hold
      }
    }
  }
  return [ listOfNumbers, counter ]
}

console.log(bubbleSortSecond([4, 2, 7, 1, 3]));

