function hasDuplicateValue(numbers: number[]) {
  let steps = 0;
  for(let i = 0; i<numbers.length; i++) {
    for(let j = 0; j<numbers.length; j++) {
      steps++;
      // __AUTO_GENERATED_PRINT_VAR_START__
      console.log("hasDuplicateValue#for#for steps: %s", steps); // __AUTO_GENERATED_PRINT_VAR_END__
      if (i !== j && numbers[i] == numbers[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasDuplicateValue([1,2,3]));


function hasDuplicateLinear(numbers: number[]) {
  let existingNumbers: number[] = [];
  for (var i = 0; i<numbers.length; i++) {
    if (existingNumbers[numbers[i]] === undefined) {
      existingNumbers[numbers[i]] = 1
    } else {
      return true
    }
  }
  return false
}

console.log(hasDuplicateLinear([1,2,3]));

