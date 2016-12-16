var kaprekarNumbers = [];
var num = 0;
var maxValue = 100;
var displayNumbers = document.getElementById("numbers");

function range () {
  for (var i = 0; i < maxValue; i++) {
    var firstNum = num;
    num *= num;
    if (num.toString().length >= 2) {
      var numSplit = num.toString().split("");
      if (num.toString().length === 3) {
        var oneAndTwo = numSplit[0] + numSplit[1];
        if (Number(oneAndTwo) + Number(numSplit[2]) === firstNum) {
          kaprekarNumbers.push({
            firstNum: oneAndTwo,
            secondNum: numSplit[2],
            finalNum: num,
            initialNum: firstNum
          });
          console.log(kaprekarNumbers);
        }
      }
      if (num.toString().length === 4) {
        var oneAndTwo = numSplit[0] + numSplit[1];
        var threeAndFour = numSplit[2] + numSplit[3];
        if (Number(oneAndTwo) + Number(threeAndFour) === firstNum) {
          kaprekarNumbers.push({
            firstNum: oneAndTwo,
            secondNum: threeAndFour,
            finalNum: num,
            initialNum: firstNum
          });
          console.log(kaprekarNumbers);
        }
      }
    } else if (num.toString().length > 4){
      console.log("higher")
    }
    num = i;
  }
}


function show () {
  for (var i = 0; i < kaprekarNumbers.length; i++) {
    var createLi = document.createElement("li");
    createLi.innerHTML = kaprekarNumbers[i].initialNum;
    displayNumbers.appendChild(createLi);
  }
}

range();
show();
