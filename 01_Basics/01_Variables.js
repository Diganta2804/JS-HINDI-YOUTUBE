const accountId = '16931120016' 
//Only way to declare a constant, by using the 'const' keyword.

let accountEmail = "diganta@mail.com"
//Best way to declare a variable, 'let'    

var accountPassword = "12345" // Not recomended to use 'var'.
accountCity = "Jaipur" //It will take 'var' as default.(Not recomended)

//Two ways to print 
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword]) //Prints output in a tabular format.

//Q.) What will be the output if a variable is undeclared and printed ?
let accountState;
console.log(accountState); //undefined 