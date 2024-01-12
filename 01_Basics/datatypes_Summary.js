// Note- 
// JavaScript is a dynamically typed language.
//-------------------------------------------------------------|

/* Types of Data Types - 

    1.) Primitive : String, Number, Boolean, null, undefined, Symbol, BigInt

    2.) Non-Primitive : Array, Objects, Functions
*/
//-------------------------------------------------------------|
/* Difference between Primitive and Non-primitive Data types.

>The Primitive data types are system defined, however we have to create and define the Non-primitive data types.

>In Primitive data type, variables can store only one value at a time. However in Non-primitive data types, either multiple values of the same type or different type or both can be stored.

> All the data for Primitive type variables are stored on the stack.

> For Non-primitive(reference types),the stack holds a pointer to the object on the heap.
*/
//-------------------------------------------------------------|
//Symbols (Pirmitive) [IMP]
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
//But remeber, both sym1 and sym2 are not same.Although, two variables have the same data and data type, but then also they are different.
//Proof - 
console.log(sym1 === sym2);
//-------------------------------------------------------------|

//Array 
const heros = ["shaktiman", "naagraj", "doga"];
//Object 
let myObj = {
    name: "Diganta",
    Age:"21"
}
//Function
let number = 2
function square(number) {
    console.log(number * number); 
  }

/* Return, Datatype of variables in JavaScript using typeof.

#Premitive Datatypes

                Type                                   typeof

i)             Number                                   number
ii)            String                                   string
iii)           Boolean                                  boolean
iv)            Bigint                                   bigint
v)             Symbol                                   symbol
vi)            Null                                     object    [Imp]
vii)           Undefined                                undefined [Imp]


#Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                 object
ii)              Array                                  object
iii)             Function                            function(object) [Imp]
When you learn further prototype, function also acts as a object-function. 
*/