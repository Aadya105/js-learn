const accountId=144553
let accountEmail="aadya@google.com"
var accountPassword="12345"
accountCity="Jaipur"

//accountId=12
//console.log(accountId)

/*prefer not to use var 
because of the issue of block scope
*/
let accountState

accountEmail="hchc@google.com"
accountPassword="123"
accountCity="lucknow"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])