// variables

let form = document.querySelector(".form")
let usernameInput = document.querySelector(".username")
let passwordInput = document.querySelector(".password")


// local storage key & user array

const STORAGE_KEY = "sign-in-user-storage-key"
let userArray = [];

// User class & constructor

class USER {
  constructor(username,password){
    this.username = username;
    this.password = password;
  }
}
