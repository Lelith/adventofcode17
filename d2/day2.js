function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  var numbers =  input.split('\n');
  console.log(numbers);
  var sum = 0;

  for(i = 0; i < numbers.length; i++){
    tmp = numbers[i];
    tmp = tmp.split('\t').map(Number);
    max = Math.max.apply(null, tmp);
    min = Math.min.apply(null, tmp);
    sum =sum+(max-min);
  }

  document.querySelector('[data-type="output"]').append(sum);
}
