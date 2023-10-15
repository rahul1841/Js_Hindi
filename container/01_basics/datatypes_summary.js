// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log( id == anotherId);

const bigNumber = 3434944930490494309n



// references (non primitive)

// array, objects, Functions

const heroes = ["shaktiman", "nagraj", 'doga'];

let myObj = {
    name: "rahul",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof bigNumber);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack(primitive), Heap(non primitive)

let myYoutubeName = "FlopGmerYT"

let anothername = myYoutubeName
anothername = "Rahul"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rahul@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


