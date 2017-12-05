function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  input = input.split('\n').map(Number);
  var pointer = 0;
  var sum = 0;
  console.log(input);
  
  while ((pointer < input.length) && (pointer >-1)) {
    offset = input[pointer];
    newPos = pointer + offset;
    if ( offset >=3){
      input[pointer] --;
    } else {
      input[pointer] ++;
    }
    pointer = newPos;
    sum ++;
  }

  document.querySelector('[data-type="output"]').append(sum);
}
