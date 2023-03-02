// Onboarding 
function next() {
    window.location.href = "onboarding2.html"
}

// Onboarding 2
function getstr() {
    window.location.href = "signup.html";
}

// Creating an account
let accountInfo = [];
let firstname = document.getElementById("firstname"),
lastname = document.getElementById("lastname"),
email = document.getElementById("email"),
password = document.getElementById("password"),
repeat = document.getElementById("repeat");

let storedAccountInfo = localStorage.getItem("account");


function create() {
    if (repeat.value !== password.value) {
        alert("Password does Not Match")
    }

    // Check if accountInfo already exists in local storage
    // if (storedAccountInfo) {
    //     accountInfo = JSON.parse(storedAccountInfo)
    // }
    else {
        function accountNumber() {
            const randomNumber = Math.floor(Math.random() * 1000000000);
            const accountNumber = randomNumber.toString().padStart(9, "0");
            return accountNumber;
        }
        userInfo = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
            accountnumber: accountNumber()
        }
        accountInfo.push(userInfo)
        localStorage.setItem("account", JSON.stringify(accountInfo));
    }
    window.location.href = "accloading.html"
}

// Login Account
let inapp = []
let emailog = document.getElementById("emaillog"),
passwordlog = document.getElementById("passwordlog");

let registered = JSON.parse(localStorage.getItem("account"));

// let loggedAcccountInfo = JSON.parse.localStorage("loggeduser")

function login() {
    let found = registered.find((element) => element.email == emailog.value && element.password == passwordlog.value); 
    if(found){
        alert("Login Successful")
        window.location.href= "dashboard.html"

        inapp.push(found)
        localStorage.setItem("loggeduser", JSON.stringify(found));
        //  console.log(found);
    }else{
        alert("User not found")
    }
}


// Already Have An Account
function haveAnAccount() {
    window.location.href = "login.html"
}

// Don't Have An Account
function dontHave() {
    window.location.href = "signup.html"
}

// Print Account Number
let show = document.getElementById("show")

accountInfo = JSON.parse(localStorage.getItem("account"));

for (let i = 0; i < accountInfo.length; i++) {
    const element = accountInfo[i];

    show.innerHTML = `<div class="num">${element.accountnumber}</div>`;
    
}

// Save Account Number
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(show.innerText);
        alert("Copied to clipboard");
    
    } catch (err) {
        console.error("Failed to copy:", err);
    }
    window.location.href = "login.html"
}

// Print Account User's name 
let shon = document.getElementById("use")

let gotte = JSON.parse(localStorage.getItem("loggeduser"));

for (let i = 0; i < gotte.length; i++) {
    const element = gotte[i];
    
    shon.innerHTML = `<p>Hinder,${element.firstname}<p>`
}