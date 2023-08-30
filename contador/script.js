//pega o numero pelo id
var number = parseInt(document.getElementById("number").innerText);

//diminuir o valor
function DECREASE() {
  for (number == number; --number; ) {
    var ValorDecrease = number;
    document.getElementById("number").innerHTML = ValorDecrease;
    break;
  }
}

console.log(number);

//reseta
function RESET(){
    number = 0;
    document.getElementById("number").innerHTML = number;
    
}


//aumenta o valor
function INCREASE() {
    for (number == number; ++number; ) {
        var ValorIncrease = number;
        document.getElementById("number").innerHTML = ValorIncrease;
        break;
      }
}
