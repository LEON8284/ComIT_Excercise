function showEvenNumbers() {
    for ( let i= 0; i<100; i++ ) {
        if (i%2) {
            console.log(i);
        }
    }
}

function showUser( name , age, phoneNumber, street, postalCode, martialStatus) {
    console.log('Your name is :' + name );
    console.log('Your age is : '+ age);
    console.log('Your phone number is: ' + phoneNumber);
    console.log('Your Street is: ' + street)
    console.log('Your postal code is: ' + postalCode);
    console.log('Are you married?' + martialStatus);

}

let evenNumbers;
evenNumbers = showEvenNumbers;


for (let j= 0; j<5; j++) {
    evenNumbers();
}

//calclualting fibonacci series 
let nextNumber;
let number1 = 0;
let number2 = 1;

let fibonacciNumber = function(n) {
    for (let a = 1; a<=n; a++) {
        console.log(number1);
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
    }

};

fibonacciNumber(50);

let showName = function(name) {
    for (b = 0; b<2; b++) {
        console.log("===========");
        console.log("=  " + name + "  =");
        console.log("===========");
    }

};

showName("Ozzie");








