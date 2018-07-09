function max(numbers){

let maxNumber = 0
for (i = 0; i <= numbers.length; i++){
  if (numbers[i] > maxNumber){
    maxNumber = numbers[i]
  }
}
  return maxNumber
}
