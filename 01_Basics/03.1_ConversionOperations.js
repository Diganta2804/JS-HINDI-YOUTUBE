let score = 50

// Two ways to know the type of the variable -
console.log(typeof score);
console.log(typeof (score));
//--------------------------------|

// Q.) How to convert number to string ? (Type Conversion)
let num = 78
console.log(typeof num);
let numberTostring = String(num)  
console.log(typeof numberTostring) 
console.log(numberTostring); //Output: 78

// Q.) How to convert string to number ? (Type Conversion)
let person_name = "Diganta"
let valueInNumber = Number(person_name)
console.log(typeof valueInNumber)
console.log(valueInNumber) 
//String is converted to Number, but it will give NaN(Not a Number) as output when printed.
/* Note-
    "33" => 33       (String to Number conversion)
    "33abc" => NaN   (String to Number conversion)
    null => 0        (null to Number conversion)
    undefined => NaN (undefined to Number conversion)
    false => 0       (boolean to Number conversion)
    true =>  1       (boolean to Number conversion)
*/

// Q.) Boolean Type Conversion cases - 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/* Note - 
    1 => true       
    0 => false
    "" => false       (If we pass empty string, it will print false)
    "Diganta" => true (If we pass normal string, it will print true)
*/
//-----------------------------------|

