//bt1
function calcPrimeNumber() {
  var beginNum = parseInt(document.numbers.firstNum.value);
  var endNum = parseInt(document.numbers.secondNum.value);
  var primeNumbs = new Array();

  var min = beginNum;
  while (min <= endNum) {
    if (isPrime(min) == true) {
      primeNumbs[primeNumbs.length] = min;
    }
    min = min + 1;
  }
  if (primeNumbs.length == 0) {
    document.getElementById("output_content").innerHTML =
      "chua nhap so nguyen to";
  } else {
    outputPrimeNums(primeNumbs);
  }
}
function isPrime(num) {
  var flag = true;
  for (var i = 2; i <= Math.ceil(num / 2); i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function outputPrimeNums(primes) {
  var html = "<h2>So Nguyen To La</h2>";
  for (i = 0; i < primes.length; i++) {
    html += primes[i] + " ";
  }
  document.getElementById("output_content").innerHTML = html;
}
//bt2
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   console.log(str.repeat(i));
// }
//
function numberOneTriangle(length) {
  var dong = "";
  for (var i = 1; i <= length; i++) {
    for (var j = 1; j <= i; j++) {
      dong += "*";
    }
    dong += "\n";
  }
  return dong + "\n";
}
console.log(numberOneTriangle(5));
