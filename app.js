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
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeat = document.getElementById("repeat");
let pinInput = document.getElementById("pinn");

let storedAccountInfo = localStorage.getItem("account");


function create() {
    if (repeat.value !== password.value) {
        alert("Password does Not Match")
    }
    else {
        function accountNumber() {
            const randomNumber = Math.floor(Math.random() * 1000000000);
            const accountNumber = randomNumber.toString().padStart(9, "0");
            return accountNumber;
        }

        let userInfo = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
            accountnumber: accountNumber(),
            balance: 20000.00,
            pin: null
        }

        // Check if accountInfo already exists in local storage
        if (storedAccountInfo) {
            accountInfo = JSON.parse(storedAccountInfo)
        }

        accountInfo.push(userInfo)
        localStorage.setItem("account", JSON.stringify(accountInfo));
        alert("Account created successfully");
        window.location.href = "accloading.html"
    }

}

// Login Account
let inapp = []
let emailog = document.getElementById("emaillog"),
    passwordlog = document.getElementById("passwordlog");

let registered = JSON.parse(localStorage.getItem("account"));

// let loggedAcccountInfo = JSON.parse.localStorage("loggeduser")

function login() {
    let found = registered.find((element) => element.email == emailog.value && element.password == passwordlog.value);
    if (found) {
        alert("Login Successful")
        window.location.href = "dashboard.html"

        inapp.push(found)
        localStorage.setItem("loggeduser", JSON.stringify(found));
    } else {
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

// Save Account Number
let show = document.getElementById("see")
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(show.innerText);
        alert("Copied");

    } catch (err) {
        console.error("Failed to copy:", err);
    }
    window.location.href = "setpin.html"
}

// Set Account Use's Pin
function savePin() {
    pinInput = document.getElementById("pinn");
    if (!pinInput) {
        alert("PIN input not found");
        return;
    }
    if (pinInput.value.length !== 4 || !/^\d+$/.test(pinInput.value)) {
        alert("please enter a valid 4-digit PIN");
        return;
    }
    storedAccountInfo = localStorage.getItem("account");
    if (storedAccountInfo) {
        accountInfo = JSON.parse(storedAccountInfo);
        let lastUserInfo = accountInfo[accountInfo.length - 1];
        lastUserInfo.pin = pinInput.value;
        localStorage.setItem("account", JSON.stringify(accountInfo));
        alert("PIN set");
        window.location.href = "pingenerated.html";
    }
}

// Save Pin
let seep = document.getElementById("pin")
const copyPin = async () => {
    try {
        await navigator.clipboard.writeText(seep.innerText);
        alert("Copied");
        console.log("working");

    } catch (err) {
        console.error("Failed to copy:", err);
    }
    window.location.href = "login.html"
}

// Print Balance

let bal = document.getElementById("balance");
let loged = JSON.parse(localStorage.getItem("loggeduser"));
bal.innerHTML = `NGN ${loged.balance}`