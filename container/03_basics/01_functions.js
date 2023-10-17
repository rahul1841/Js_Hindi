

function sayMyName(){
console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");

}

sayMyName()

// function addTwoNumbers(a,b){  // parameters
//    console.log(a+b);
// }

function addTwoNumbers(a,b){  // parameters
//    let result = a+b
//    return result

      return a+b
}

const result = addTwoNumbers(2, 5) // arguments
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in `
    
}

console.log(loginUserMessage("Rahul"))
console.log(loginUserMessage())




