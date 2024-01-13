//Old Way
const name = "Diganta"
const repocount = 10
console.log(name + repocount);

/*
New Way (Backticks and Strings Interpolation)

#Backticks ->
Backticks (``) are used in JavaScript to define template literals. Template literals are a newer feature that makes working with strings easier.

#String Interpolation -> 
String interpolation is a technique used in software development to insert variables or expressions into a string.
Syntax : ${variable}

*/
// Practical Usage of Backticks and Strings Interpolation - 
console.log (`My name is ${name}, and my repocount is ${repocount}`)

//Another way to declare a String.
const gameName = new String('Beep')

//# Accessing key value pairs [B(0th Pos) e(1st Pos) e(2nd Pos) e(3rd Pos)]
console.log(gameName[2]);//Output: e(As,2nd poistion I have 'e') [2 is key]

// ********************* STRING FUNCTIONS *****************************

// 1) String length 
console.log(`String length is: ${gameName.length}`);

// 2) String  toUpperCase() and toLowerCase()
console.log(`String in Uppercase: ${gameName.toUpperCase()}`);
console.log(`String in Lowercase: ${gameName.toLowerCase()}`);

// 3) String charAt()
// The JavaScript string charAt() method is used to find out a char value present at the specified index in a string.
console.log(`Character at your entered index is: ${gameName.charAt(0)}`);

/* 4) String indexOf()

> The JavaScript string indexOf() method is used to search the position of 
  a particular character or string in a sequence of given char values. 
> This method is case-sensitive.
> The index position of first character in a string is always starts with 
  zero. 
> If an element is not present in a string, it returns -1.
*/
console.log(`Index of your given character is: ${gameName.indexOf('p')}`);
console.log(`Index of your given character is: ${gameName.indexOf('d')}`);

/* 5) String substring()
>  A part of String is called substring.
>  JavaScript, substring() function fetch the string on the basis of 
   provided index and returns the new sub string.
>  It works similar to the slice() method with a difference that it doesn't 
   accepts negative indexes.
>  Syntax : string.substring(start,end)
*/
const newString = gameName.substring(0, 2)
console.log(`The new substring is: ${newString}`)

/* 6) String slice()
>   The JavaScript string slice() method is used to fetch the part of the 
    string and returns the new string. 
>   It required to specify the index number as the start and end parameters 
    to fetch the part of the string. 
>   The index starts from 0.
>   This method allows us to pass a negative number as an index. 
>   In such case, the method starts fetching from the end of the string. 
>   It doesn't make any change in the original string.
>   Syntax : string.slice(start,end)  
*/
const anotherString = gameName.slice(1,4)
console.log(`The new sliced string is: ${anotherString}`)
const anotherString2 = gameName.slice(-4,3)
console.log(`The new sliced string is: ${anotherString2}`)

/* 7) String trim()
>   The trim() method of String values removes whitespace from both ends of 
    this string and returns a new string, without modifying the original string.

>   To return a new string with whitespace trimmed from just one end, use 
    trimStart() or trimEnd().

*/
const newStringOne = "   Diganta    "
console.log(`Without using Trim: ${newStringOne}`);
console.log(`With using Trim: ${newStringOne.trim()}`);

//8) String replace()
const mail = "diganta$gmail.com" 
console.log(`Replacing the $ with @: ${mail.replace('$','@')}`);

//9) String includes()
console.log(`Does the name diganta is there in the given mail : 
${mail.includes('diganta')}`);
console.log(`Does the name Raj is there in the given mail : 
${mail.includes('Raj')}`);

// Q.) How to convert a String into an Array ?
let name2 = "Suraj-Gopal-Goswami"
console.log(name2.split('-'));  //Splitting on the basis of '-'.
// I can also perform a split, on the basis of Space.
//Ex- 
let name3 = "Suraj Goswami"
console.log(name3.split(' ')); 

// ****************** STRING READING MATERIAL **************************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String