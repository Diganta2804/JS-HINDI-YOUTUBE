"use strict"; //Treat all JS code as newer version.

/* Why use "use strict" ?
> The "use strict" directive enables JavaScript's strict mode. 
> JavaScript's strict mode was introduced in ECMAScript 5. 
> It enforces stricter parsing and error handling on the code at runtime. 
> It also helps you write cleaner code and catch errors and bugs that might 
  otherwise go unnoticed.
*/

//----------------------------------------------------|

/* why alert doesn't work on VScode ?
>  We are using nodejs, not on browser.
>https://developer.mozilla.org/en-US/docs/Web/API/Window/alert (Alert Notes)
*/

//----------------------------------------------------|

// Notes- 
// # Maintain Code Readability.
console.log(3 
  +
   3) //code readability should be high,this type of initialisation is not recommended.

console.log("Diganta")

// https://tc39.es/ecma262/2023/multipage/ (Original Documentation for JS)

//----------------------------------------------------|

// DataTypes - 

// number => 2 to power 53
// bigint
// char => Nothing called character it's all strings
// string => "" / ''
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//----------------------------------------------------|

// typeof -> The typeof operator returns a string indicating the type of the operand's value.

console.log(typeof 'S'); //This is also a String
console.log(typeof "Diganta"); //This is also a String
console.log(typeof 123);
console.log(typeof undefined); // undefined
console.log(typeof null); //Returns  "object"
//----------------------------------------------------|