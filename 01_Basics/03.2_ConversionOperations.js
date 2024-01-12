// *********************** Operations ***********************
let value = 3
let negValue = -value
console.log(negValue); //Output : -3

/* Notes- (Basic Arithmetic Operations)
 > console.log(2+2); => 4
 > console.log(2-2); => 0
 > console.log(3*2); => 6
 > console.log(2**3);=> 8 (2**3 means, 2 power 3)
 > console.log(4/2); => 2
 > console.log(4%2); => 0
*/

//String Adding
let str1 = "Hello"
let str2 = " Dost"
let str3 = str1 + str2
console.log(str3);

/* Tricky Cases in JavaScript - 
 
> console.log("1" + 2 + 2); -> String first e thakle sobai kei string hisbe treat korbe
|Output - 122|

> console.log(1 + 2 + "2"); -> String last e thakle agee normal kaaj hobe, tar por string er kaaj.
|Output - 32|

*/

// Further Tricky & Useless cases - 
    console.log(true);        // Output: True
    console.log(+true);      // Output: 1
    console.log(+"");       // Output: 0