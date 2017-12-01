function calculateSum(){
  var input = document.getElementById('input').innerHTML;
  var numbers =  input.split('').map(Number);
  var sum = 0;
  var length = numbers.length;
  var steps = length / 2;

  for (i = 0; i < steps; i++){
    if (numbers[i] == numbers[i+steps]){
      sum +=numbers[i];
    }
  }
  sum = sum * 2;
  console.log("final result " + sum);
}
