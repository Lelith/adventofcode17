function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  rows = input.split('\n');
  var sum = rows.length;

  for (i = 0; i < rows.length; i++){
    passphrases = rows[i].split(' ');
    for (j = 0; j < passphrases.length-1; j++ ){
      for ( k = j+1; k <= passphrases.length-1; k++){
        if(passphrases[j].split("").sort().join("") == passphrases[k].split("").sort().join("")) {
          sum --;
          j = passphrases.length;
          break;
        }
      }
    }
  }
  document.querySelector('[data-type="output"]').append(sum);
}
