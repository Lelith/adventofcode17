function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  var steps = 0;
  var memoryBank = input.split('\t').map(Number);
  var bankLength = memoryBank.length;
  var combinations =[];
  combinations[steps] = memoryBank.toString();
  var match = -1;

  console.log("calculating hang on...");
  while (match < 0){
    steps ++;
    var maxBlocks = Math.max.apply(null, memoryBank);
    var pointer = memoryBank.indexOf(maxBlocks);

    combinations[steps] =  distribute(memoryBank, bankLength, maxBlocks, pointer);;
    match = findMatch(combinations, steps);
  }
  var cycles = steps - match;
  console.log("------------");
  console.log(steps);
  document.querySelector('[data-type="output"]').append(cycles);
}

function distribute(memoryBank, bankLength, maxBlocks, pointer){
  var currentPos = pointer;
  memoryBank[pointer] = 0;
  for (var i = maxBlocks; i >0 ; i--) {
    currentPos ++;
    if (currentPos > (bankLength-1)) {
      currentPos = 0;
    }
    memoryBank[currentPos]++;
  }
  var combination = memoryBank.toString()
  return combination;
}

function findMatch(combinations, steps){
  var latestCombination = combinations[steps];
  for (var i = 0; i < steps; i++) {
    if(latestCombination === combinations[i].toString()){
      return i;
    }
  }
  return -1;
}
