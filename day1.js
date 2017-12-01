function calculateSum(){
  var input = document.getElementById('input').innerHTML;
  var numbers =  input.split('');
  var sum = 0;

  numbers.forEach(function(number, index){
    if(numbers[index+1]){
      if (number == numbers[index+1]){
        sum += parseInt(number);
      }
    } else if(number == numbers[0]){
      sum += parseInt(number);
    }
  });
  console.log("final result" + sum);
}
