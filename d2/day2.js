function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  var numbers =  input.split('\n');
  console.log(numbers);
  var sum = 0;

  for(i = 0; i < numbers.length; i++){
    tmp = numbers[i];
    tmp = tmp.split('\t').map(Number);
    sum += findModulo(tmp);
  }

  document.querySelector('[data-type="output"]').append(sum);
}

function findModulo(arr){
  for (j = 0; j < arr.length; j ++) {
    for(k = j+1; k < arr.length; k ++){
      var a = 1;
      var b = 1;
      if (arr[j] > arr[k]) {
        a = arr[j];
        b = arr[k];
      } else {
        a = arr[k];
        b = arr[j];
      }
      if (a%b==0) {
        return a/b;
      }
    }
  }
}
