function SetUsername (username) {
    // complex DB calls
    this.username = username
    console.log("called");
}


function createUser (username, email, password) {
    // SetUsername(username) // This will not set the username property for the createUser context/prototype object
                             // but rather for the called func (SetUsername) which will be deleted from memory
                             // as soon as its execution ends

    // So, to hold it's reference right here and change the context of 'this' in the Setusername
    // s.t 'this' in SetUsername() will refer to the execution context of createUser (the calling function)
    // we'll use the call() keyword with the 'this' paramter

    SetUsername.call(this, username) // Now, this call will set the username property in this current context
                                     // i.e. prototype of createUser and its ref will be given to chai variable

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai)

// For reference: https://excalidraw.com/#json=zG70eREQd2bI3Lr7DzUav,TYlr_UOz9FFXUcGOI69z0w 