function fizzbuzz(num) {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) console.log("Fizz Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzbuzz(20);



//function fizzbuzz(value1, value2) {
//let returnValue = "";
//let Fizz = false;
//let Buzz = false;
//for (let i = 1; i <= 100; i++) {
// Fizz = i % value1 === 0;
//Buzz = i % value2 === 0;
//switch (true) {
// case Fizz && Buzz: {
//  returnValue += "FizzBuzz";
//  break;
// }
//case Fizz: {
// returnValue += "Fizz";
// break;
//}
// case Buzz: {
//  returnValue += "Buzz";
//  break;
// }
// default: {
// returnValue += i + " ";
//  break;
//  }
// }
// }

//}
//fizzbuzz(3, 5);

//let returnValue = "";
//for (let i = 1; i <= 100; i++) {
// returnValue +=
//   ((i % value1 === 0 ? "Fizz" : " ") + (i % value2 === 0 ? "Buzz" : " ") ||
//   i) + " ";
//}
// return returnValue;

//for (let i = 1; i < 101; i++) {
//if (i % 15 === 0) {
//console.log("FIZZBUZZ");
//} else if (i % 3 === 0) {
//console.log("FIZZ");
//} else if (i % 5 === 0) {
//console.log("BUZZ");
// } else {
//console.log(i);
//}
//}
