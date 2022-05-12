// variables

let form = document.querySelector(".form")
let usernameInput = document.querySelector(".username")
let passwordInput = document.querySelector(".password")


// local storage key & user array

const STORAGE_KEY = "sign-in-user-storage-key"
let usersArray = [];

// User class & constructor

class USER {
  constructor(username,password){
    this.username = username;
    this.password = password;
  }
}

get username (){
  return this.username;
}

get password(){
  return this.password;
}


// Sign-In Events & User to Home Relocation


form.addEventListener("submit", function (event) {
 event.preventDefault();
 UserSignedIn(usernameInput.value, passwordInput.value);
 window.location.href = "/src/pages/home.html";
});


// Saving form Inputs

function UserSignedIn(username, password) {
 if (username !== "" && password !== "") {
   let UserSignedIn = new User(username, password);
   userArray.push(UserSignedIn);
   addToLocalStorage(usersArray);
}
}


//Local Storage

function addToLocalStorage (usersArray){
  usersArray = JSON.stringify(usersArray);
  localStorage.setItem(STORAGE_KEY, usersArray);
}
