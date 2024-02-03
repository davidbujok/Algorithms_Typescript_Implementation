const binarySearch = (listOfNumbers: number[], searchedValue: number) => {

  let lower_bound = 0;
  let upper_bound = listOfNumbers.length - 1;

  while (lower_bound <= upper_bound) {
    let midpoint = Math.floor((upper_bound + lower_bound) / 2);
    let value_at_midpoint = listOfNumbers[midpoint];
  
    if (searchedValue < value_at_midpoint) {
      upper_bound = midpoint - 1;
    } else if (searchedValue > value_at_midpoint) {
      lower_bound = midpoint + 1;
    } else {
      return listOfNumbers[ midpoint ];
    }
  }
  return("This value doesn't exist in the list")
}

console.log(binarySearch([3,5,8,7,5,10,15,26],32));

