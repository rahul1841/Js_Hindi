// singleton



 // object literals


 const mySym = Symbol("key1")

 const jsUser  = {
    name: "hitesh",
    "full name": "Hitersh chaudhary",
    [mySym]: "mykey1",
    age:18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
 }


//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function()
{
    console.log("Hello js user");
}

jsUser.greeting2 = function()
{
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());




 