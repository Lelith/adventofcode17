function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  var steps = 0;
  var numbers = [input.split('\t').map(Number)];
  var blocks = numbers[0].length;
  var match = false;

  while(!match && steps < 10) {
    var load = Math.max.apply(null, numbers[steps])
    var pointer = numbers[steps].indexOf(load);
    steps ++;
    numbers[steps] = distribute(numbers[steps-1], load, pointer, blocks);
    match = findMatch(numbers, steps);
  }
  console.log(numbers);
  document.querySelector('[data-type="output"]').append(steps);
}

function distribute(distribution, load, pointer, blocks){
  var leftover = load % (blocks-1);
  var quantity = (load - leftover) / (blocks-1);
  var currentPos = pointer;
  var newBlocks = [];

  newBlocks[currentPos] = leftover;
  for(i = 1; i < blocks; i++) {
    currentPos++;

    if(currentPos > (blocks-1)) {
      currentPos = 0;
    }

    newBlocks[currentPos] = distribution[currentPos]+quantity;
  }
  return newBlocks;
}

function findMatch(numbers, steps){
  console.log("findMatch");
  console.log(numbers.length);
  console.log("---------------");
  for (i = 0; i < numbers.length-1; i++) {
      console.log("test: "+ numbers[steps].toString() +" equals "+numbers[i].toString());
      if(numbers[steps].toString() === numbers[i].toString()){
        console.log("!!!!---------------!!!");
        console.log("maaatch");
        console.log("!!!!---------------!!!");
        return true;
      }
    }
  return false;
}
