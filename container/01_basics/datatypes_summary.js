// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id == anotherId);

const bigNumber = 3434944930490494309n



// references (non primitive)

// array, objects, Functions

const heroes = ["shaktiman", "nagraj", 'doga'];

let myObj = {
    name: "rahul",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
