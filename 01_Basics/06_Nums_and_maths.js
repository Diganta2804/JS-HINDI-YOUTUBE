// Normal Declaration
const score = 400
console.log(`Normal variable declaration: ${score}`)
console.log(`Typeof 'score': ${typeof score}`)

// Explicitly Defining DataType
const balance = new Number(600) //Defining an obj new, which is of num type.
console.log(`Explicitly Defining DataType Declaration:${balance}`)
console.log(`Typeof 'balance' : ${typeof balance}`)
// Q.) Why typeof 'balance' gives object as an result ?
// Ans: We are defining an obj new, which is of number type, inside balance.

//Converting 'balance'(Number) to String.
console.log(balance.toString());
console.log(balance.toString().length); // Output: 3 (600 = 3digit number)

// ********************** Number Functions ************************
//# Number toFixed ()
//The JavaScript number toFixed() method returns the string representing a number that has exact digits after the decimal point instead of exponential notation.
let num1 = 148.567
console.log(num1.toFixed(2));

//# Number toPrecision ()
//> The JavaScript number toPrecision() method returns the string representing a number of specified precision.
// Cases - 
let num2 = 23.8966
console.log(num2.toPrecision(3));

let num3 = 123.8966
console.log(num3.toPrecision(3));

let num4 = 1123.8966
console.log(`Setting wrong precison value for the number 1123.8966 : ${num4.toPrecision(3)}`);
//In the last number(num4) I will get an weird output, like (1.12e+3) because we also should know how to use the precison operator corrrectly, as the number was a 4digit number(excluding the decimal part).I shouldn't have set the precision value to 3.As,it now giving me 3 precison value (1.12) and converting the rest into exponential part(e+3).
let num5 = 1123.8966
console.log(`Setting correct precison value for the number 1123.8966:${num5.toPrecision(4)}`)

//# Number totoLocaleString()
const hundreds = 1000000
// console.log(`Printing in US Standards:${hundreds.toLocaleString('')}`)
console.log(`Printing in INDIAN Standards:${hundreds.toLocaleString('en-IN')}`)

//Article on Numbers: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

//Practical/Read: Concept of MAX_VALUE and MIN_VALUE [IMP], from browser.
//--------------------------------------------------------------------------

// ++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++

//console.log(Math) [Run this in inspect->console,to see the full picture]

// # Math Functions

// 1) Math.abs()
// > returns the absolute (Positive) value of a int value.
let n1 = -4
let n2 = 8
console.log(Math.abs(n1))
console.log(Math.abs(n2)) //No change, already postive number 

// 2) Math.round()
// > 0.5, bah or bessi thakle 1 kore dey, kom thakle 0 kore deey 
console.log(Math.round(4.2));   // 4
console.log(Math.round(4.5));  //  5
console.log(Math.round(4.8)); //   5

// 3) Math.ceil()
// > ceil() method increases the given number up to the closest integer value and returns it.
console.log(Math.ceil(4.0002)); // 5

// 4) Math.floor()
console.log(Math.floor(4.0002)); // 4 

// 5) Math.min() and Math.max()
console.log(Math.min(4 , 8 , 2));
console.log(Math.max(4 , 8 , 2));

// 6) Math.random() [IMP]
// > The JavaScript math random() method returns the random number between 0 (inclusive) and 1 (exclusive).
console.log(`Math.random() value always lie between 0 and 1: ${Math.random()}`);

/* Q.) How to use Math.random() within in a limit ?
Lets say,I want number between a set limit, how will I do that ?

IMPORTANT [REMEMBER]
*/
 
let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));

/* Q.) why one extra +1 in (max-min+1) ?

Ans: 
i) Actually here , the plus one is  added to include the maximum number(20) into the range. Zero case is already handled by adding '+min' after it.   For example -  
let's say the random returns 0.99999 then multiply it with 11(20-10+1), we will get 10.989, take the floor value of this which will be 10 and now add it with min value which is 10 so overall answer would be 20(the ending range). That's the maximum case.

ii) If we didn't included the +1, and multiplied 0.99999 with 10(20-10), the we would have got 9.999, taking the floor value it would have been 9. That's lower than the minimum value.

ii) Similarly if random returns 0.0122, then everything will get 0 in the left and then adding min(10) to 0 will give us 10 which is the starting range.

*/

// Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number [IMP]
