const accountId = 144553
let accountEmail = "Kumar360@gmail.com"
var accountPassword = "Kumar12@"
accountCity = "Delhi"

let accountState;

// accountId = 2 not allowed

accountEmail = "hc@gmail.com"
accountPassword = "3132"
accountCity = "Jaipur"

console.log(accountId);


/*
prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
