/* Basics Comaprisons -
 >   console.log(2 > 1);
 >   console.log(2 >= 1);
 >   console.log(2 < 1);
 >   console.log(2 == 1);
 >   console.log(2 != 1);
*/

// JavaScript auto converts these type of conversions-  
    console.log("2" > 1);        // Output :  true
    console.log("02" > 1);      //  Output :  true

// Tricky Conversion Cases-     
console.log(null > 0);        //Output : false
console.log(null == 0);      //Output : false
console.log(null >= 0);     //Output : true 

/* Q.) Why the last one is true ? [Important]
Ans: 
# In JS,equality check (==) and comparison (>,<,>=,<=) works differently.
# Comparison converts 'null' to a number, treating it as 0.
# That's why, (3) null >= 0 => [True] and (1) null > 0 =>[False].
*/

console.log(undefined == 0);         //Output : false
console.log(undefined > 0);         //Output : false
console.log(undefined < 0);        //Output : false

/* Strict Check (===)

> The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. 

> Unlike the equality operator(==), the strict equality operator always considers operands of different types to be different.

*/

// Example - 

console.log('10' == 10);  // Equality Operator | Output: True.
console.log('10' === 10);//  Strict equality   | Output: False.
//You cann't compare a String with a number, using strict equality operator.