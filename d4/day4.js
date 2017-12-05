function calculateSum(){
  var input = document.querySelector('[data-type="input"]').innerHTML;
  rows = input.split('\n');
  var sum = rows.length;

  for (i = 0; i < rows.length; i++){
    passphrases = rows[i].split(' ');
    console.log(passphrases);

    for (j = 0; j< passphrases.length; j++ ){
      if (passphrases.indexOf(passphrases[j], j + 1) > -1) {
        sum --;
        break;
      }
    }
  }
  document.querySelector('[data-type="output"]').append(sum);
}
