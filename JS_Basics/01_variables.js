const accountId = 1222
let accountEmail = "rk@google.com"
var accountPassword = "12390"
accountCity = "Raipur"
let accountState

// accountId = "12" //constants can't be changed.
/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/
accountPassword = "rk"
console.table([accountId,accountPassword,accountEmail,accountCity,accountState])