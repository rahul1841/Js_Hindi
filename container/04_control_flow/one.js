//if 

// const isUserLoggedIn = true
// const temp = 41
// if(temp){
// console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }
// <, >, <=, >=, ==, !=, ===(check datatypetype also), !==


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedin && debitcard && 2==3){
    console.log("Allow to buy course");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}