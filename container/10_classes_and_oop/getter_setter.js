class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const hitesh = new User("rk123@gmail.com", "abc")
console.log(hitesh.password);
console.log(hitesh.email);