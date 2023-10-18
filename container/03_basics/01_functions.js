

// function sayMyName(){
// console.log("H");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("h");

// }

// sayMyName()

// function addTwoNumbers(a,b){  // parameters
//    console.log(a+b);
// }

// function addTwoNumbers(a,b){  // parameters
//    let result = a+b
//    return result

//       return a+b
// }

// const result = addTwoNumbers(2, 5) // arguments
// console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    // if(!username){
    //     console.log("Please enter a username");
    //     return;
    // }
    // return `${username} just logged in `
    
// }

// console.log(loginUserMessage("Rahul"))
// console.log(loginUserMessage())




function calculateCartPrice(val1, val2, ...num1){  // rest operator
    return num1;

}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Rahul",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));