function insertionSort(listOfNumbers: number[]) {

  for(let j=1; j<listOfNumbers.length; j++) {
    
    let tempValue = listOfNumbers[j] 
    let position = j

    while (position > 0 && listOfNumbers[position-1] > tempValue ) {
      listOfNumbers[position] = listOfNumbers[position-1]
      position -= 1
    }
    listOfNumbers[position] = tempValue
  }
  return listOfNumbers
}

console.log(insertionSort([4,2,7,1,3]));

// 2,4,7,1,3
