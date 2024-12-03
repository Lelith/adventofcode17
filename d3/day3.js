function calculateSum(){
  input = document.querySelector('[data-type="input"]').innerHTML;
  input = parseInt(input);
  sum = moveToCoords(input);

  document.querySelector('[data-type="output"]').append(sum);

}

function moveToCoords(input){
  edgeLength = getEdgeLength(input);
  console.log("edgelength: "+ edgeLength);

  // calculate distance between down right croner and number
  dist = Math.pow(edgeLength, 2) - input;

  // set starting pointer to right under corner
  position = [edgeLength - 1, edgeLength - 1];
  dec = [-1, -1]; // always move left and up up

  decIndex = 0;
  count = 1;

  for(i = 0; i < dist; i ++) {
    position[decIndex] += dec[decIndex];

    count ++;

    // turn direction on corner
    if(count % edgeLength == 0) {
      dec[decIndex]*= -1

      count = 1;
      decIndex +=1;
      decIndex = decIndex > 1 ? 0 : decIndex;
    }
  }
  console.log(position[0]+" x | "+ position[1]+" y");
  //calculate manhattan distance
  return Math.abs((Math.floor(edgeLength/2)-position[0]))+Math.abs((Math.floor(edgeLength/2)-position[1]));
}

// finds the edge length of the row we are in
function getEdgeLength(num){
  length = Math.ceil(Math.sqrt(num));
  return length % 2  == 0 ? length + 1 : length;
}
