function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  var numbers =  input.split('').map(Number);
  console.log(numbers);
  var sum = 0;
  var length = numbers.length;
  var steps = length / 2;

  for (i = 0; i < steps; i++){
    if (numbers[i] == numbers[i+steps]){
      sum +=numbers[i];
    }
  }
  sum = sum * 2;
  document.querySelector('[data-type="output"]').append(sum);
}
