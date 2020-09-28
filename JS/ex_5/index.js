alert("Enter two numbers to see if the first is greater than the second");

let firstNumber = prompt("What is the First Number?", 100);
let secondNumber = prompt("What is the Second Number?", 100);

if (firstNumber > secondNumber) {
    alert(`${firstNumber} is greater than ${secondNumber} `);

  } else if (firstNumber < secondNumber) {
    alert(`${firstNumber} is less than ${secondNumber} `);

  } else {
    alert(`${firstNumber} is equal to ${secondNumber} `);
  }


  