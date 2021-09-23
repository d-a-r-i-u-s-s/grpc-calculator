window.onload = function () {
    var result;
    var NumberFieldOne = document.getElementById("num1");
    var NumberFieldTwo = document.getElementById("num2");
    var SignField = document.getElementById("sign");
    
    document.getElementById("calculate").onclick = function func(){

        switch (SignField.value) {
            case '+':
            // rpc Plus(+NumberFieldOne.value, +NumberFieldTwo.value) returns (result) {}  
            result = +NumberFieldOne.value + +NumberFieldTwo.value;
              break;
            case '-':
              result = +NumberFieldOne.value - +NumberFieldTwo.value;
              break;
            case '*':
              result = +NumberFieldOne.value * +NumberFieldTwo.value;
              break;
            case '/':
              result = +NumberFieldOne.value / +NumberFieldTwo.value;
              break;
          }

	    document.getElementById("result").innerHTML = result;
	  }
}