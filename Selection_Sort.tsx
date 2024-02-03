function selectionSort(listOfNumbers: number[]) {

  for (let i=0; i<listOfNumbers.length; i++) {
    let smallestValue = listOfNumbers[i]
    let indexOfSmallestValue = i
    for (let j=1+i; j<listOfNumbers.length; j++) {
      if (smallestValue > listOfNumbers[j]) {
        smallestValue = listOfNumbers[j]
        indexOfSmallestValue = j
      }
    }
    listOfNumbers[indexOfSmallestValue] = listOfNumbers[i]
    listOfNumbers[i] = smallestValue
  }
  return listOfNumbers
}

console.log(selectionSort([4,3,1,1,3]));

