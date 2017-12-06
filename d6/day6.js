function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  var steps = 0;
  var numbers = [input.split('\t').map(Number)];
  var blocks = numbers[0].length;
  var match = false;
  console.log(numbers);
  while(!match && steps < 5000) {
    var load = Math.max.apply(null, numbers[steps])
    var pointer = numbers[steps].indexOf(load);
    steps ++;
    numbers[steps] = distribute(numbers[steps-1], load, pointer, blocks);
    match = findMatch(numbers, steps);
  }

  console.log(numbers);
  document.querySelector('[data-type="output"]').append(steps);
}

function distribute(distribution, amount, pointer, blocks){
  var currentPos = pointer;
  var newBlocks = distribution.slice(0);
  var distributionTime = (blocks-1);
  var quantity = 0;
  var leftover = 0;

  if(amount < distributionTime ){
    distributionTime = amount;
    quantity = 1;
  } else {
    leftover = amount%distributionTime;
    quantity = (amount - leftover) / distributionTime;
  }

  newBlocks[currentPos] = leftover;

  for(i = 0; i < distributionTime; i++) {
    currentPos++;

    if(currentPos > (blocks-1)) {
      currentPos = 0;
    }

    newBlocks[currentPos] += quantity;
  }
  return newBlocks;
}

function findMatch(numbers, steps){
  newBlock = numbers[steps]
  for (i = 0; i < steps-1; i++) {
    current = numbers[i];
    for(j = 0; j < newBlock.length && newBlock[j] === current[j]; ++j){
      if(j === newBlock.length){
        return true;
      }
    }
  }
  return false;
}
