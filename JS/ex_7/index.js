let result = 0;


for (let i = 0; i < 1000; i++) { 
    result = result + i;
    if (result > 400) break;
  }

  alert(`result is : ${ result}`);

  // printing 0 to 10 using for loop 
  console.log(" printing 0 to 10 using for loop:"); 
  for (let i = 0; i <= 10; i++) { 
    console.log(i);
  }

  // priting 0 to 10 using do-while loop 
  console.log(" printing 0 to 10 using Do while loop:");
  let i = 0;
do {
    console.log(i);
  i++;
} while (i <= 10);

// printing 0 to 10 using while loop
console.log(" printing 0 to 10 using while loop:");
let k = 0;
while (k <= 10) { 
    console.log(k);
  k++;
}

// printing 100 to 1 using for loop 
console.log("printing 100 to 1 using  for loop:"); 

for (let m = 100; m >=0; m--) { 
  console.log(m);
}

// printing 100 to 1 using for do-while loop
console.log(" printing 100 to 1 using do while loop:");
let a = 100;
do {
  console.log(a);
a--;
} while (a >=0);


// printing 100 to 1 using while loop
console.log(" printing 100 to 1 using while loop:");
let b = 100;
while (b >=0) { 
    console.log(b);
  b--;
}


// printing even numbers using for loop
console.log("printing even numbers beween 0 to 100 using for loop");
for (let c=0; c <=100; c++){
  if( c%2 ) {
    console.log(c);
  }

}

// printing even numbers using do-while loop
console.log("printing even numbers beween 0 to 100 using do-while loop")
let d = 0;
do {
  if ( d%2 ) {console.log(d)}
  d++;

} while (d<=100);

// printing even numbers using while loop
console.log("printing evennumbers between 0 to 100 using while loop")
let e = 0;
while (e<=100) {
  if (e%2) {console.log(e);}
  e++;
}


for (let x=0; x<13; x++){
  for(let y=0; y<=x; y++){
    console.log("*".repeat(x));
  }
  console.log("\n");
}


