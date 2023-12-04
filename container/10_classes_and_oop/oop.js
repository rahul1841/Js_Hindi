const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from DB");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiaurCode", 11, false)
// console.log(userOne);

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);