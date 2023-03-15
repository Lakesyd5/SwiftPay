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



// Transfer Money (Moving to the main transfer page)
function transfer() {
    window.location.href = "moneytransfer.html"
}

// Going back to dashboard from the first transfer page
function backtoDash() {
    window.location.href = "dashboard.html"
}

// Going back to BankSelect Page 
function toFirst() {
    window.location.href = "moneytransfer.html"
}

// Transaction Details
function pay() {
    window.location.href = "transactionstatus.html"
}

// Profile
let userprofile = JSON.parse(localStorage.getItem("loggeduser"));
let ustop = document.getElementById("userfirst");
function inUser() {
    window.location.href = "profile.html"
};

function tohome() {
    window.location.href = "dashboard.html"
}

if (ustop) {
    ustop.innerHTML = "Hello," + " " + `${userprofile.firstname}`
}

let usernm = document.getElementById("username")
if (usernm) {
    usernm.innerHTML = `${userprofile.firstname} ${userprofile.lastname}`
}

let usenumber = document.getElementById("acnumber");
if (usenumber) {
    usenumber.innerHTML = `${userprofile.accountnumber}`
}

let usepin = document.getElementById("acpin");
if (usepin) {
    usepin.innerHTML = `${userprofile.pin}`
}

let secusername = document.getElementById("fist");
if (secusername) {
    secusername.innerHTML = `${userprofile.firstname}`
};

let secfull = document.getElementById("full");
if (secfull) {
    secfull.innerHTML = `${userprofile.firstname} ${userprofile.lastname}`
}

let secmail = document.getElementById("eadd");
if (secmail) {
    secmail.innerHTML = `${userprofile.email}`
}

// Logout an account
function logout() {
    localStorage.removeItem("loggeduser")
    window.location.href = "login.html"
}

// Generate Virtual Card
function inCard(params) {
    window.location.href = "cardgenerate.html"
}
function card() {
    window.location.href = "cardloading.html"
    // let cardNumber = "4";
    // for (let i = 0; i < 16; i++) {
    //     cardNumber += Math.floor(math.random() * 10);
    //     if (i % 4 === 3 && i != 15) {
    //         cardNumber += " "; 
    //     }
    // }
    
}

// Save Card Number
let nom = document.getElementById("cardnum")
const copyNum = async () => {
    try {
        await navigator.clipboard.writeText(nom.innerText);
        alert("Copied");
        console.log("working");

    } catch (err) {
        console.error("Failed to copy:", err);
    }
    window.location.href = "card.html"
}

// Transaction History
let history = document.getElementById("thistory");
let hisdata = JSON.parse(localStorage.getItem("Transhistory"));
let loggedhistory = JSON.parse(localStorage.getItem("loggeduser"))

// console.log(hisdata);

if (history && hisdata && loggedhistory) {
    // let userTransactions = hisdata.filter (transaction => {
    //     return (
    //         (transaction.from_firstname + ' ' + transaction.from_lastname) == loggedhistory.firstname + ' ' + loggedhistory.lastname ||
    //         (transaction.to_firstname + ' ' + transaction.to_lastname) == loggedhistory.firstname + ' ' + loggedhistory.lastname
    //     );
    // });
    // let userTransactions = hisdata.filter((tranz)=> tranz.from == loggedhistory.firstname+ " " +loggedhistory.lastname) ||(tranz.to == loggedhistory.firstname + ' ' + loggedhistory.lastname)
    let userTransactions = hisdata.filter((tranz)=> (tranz.from == loggedhistory.firstname+ " " +loggedhistory.lastname) || (tranz.to == loggedhistory.firstname + ' ' + loggedhistory.lastname))
    // console.log(userTransactions);


    userTransactions.forEach((transaction) => {
        let amount = transaction.amount.toFixed(2);
        if (transaction.from  == loggedhistory.firstname + " " + loggedhistory.lastname) {
          amount = "-" + amount;
          amountClass = "from";
        } else {
          amount = "+" + amount;
          amountClass = "to";
        }
        let transactionHTML = `<div class = "dta">
            <div class="narat">
            <div>Payment ${transaction.from == loggedhistory.firstname+ " " +loggedhistory.lastname ? "to" : "from"} ${transaction.from == loggedhistory.firstname+ " " +loggedhistory.lastname ? transaction.to : transaction.from}</div>
            </div>
            <div class="prc">
                <div class="${amountClass}">NGN ${amount}</div>
            </div>
        </div>`;
        history.innerHTML += transactionHTML;
      });
} 

// Go home from generate card
function goHome() {
    window.location.href = "dashboard.html"
}

// History button
function gohist() {
    window.location.href = "history.html"
}

// History page
let hisContent = document.getElementById("showhist");
if (hisContent && hisdata && loggedhistory) {
    let userTransactions = hisdata.filter((tranz)=> (tranz.from == loggedhistory.firstname+ " " +loggedhistory.lastname) || (tranz.to == loggedhistory.firstname + ' ' + loggedhistory.lastname))
    // console.log(userTransactions);


    userTransactions.forEach((transaction) => {
        let amount = transaction.amount.toFixed(2);
        if (transaction.from  == loggedhistory.firstname + " " + loggedhistory.lastname) {
          amount = "-" + amount;
          amountClass = "from";
        } else {
          amount = "+" + amount;
          amountClass = "to";
        }
        let transactionHTML = `<div class = "daa">
            <div class="narat">
            <div>Payment ${transaction.from == loggedhistory.firstname+ " " +loggedhistory.lastname ? "to" : "from"} ${transaction.from == loggedhistory.firstname+ " " +loggedhistory.lastname ? transaction.to : transaction.from}</div>
            </div>
            <div class="prc">
                <div class="${amountClass}"> ${amount}</div>
            </div>
        </div>`;
        hisContent.innerHTML += transactionHTML;
      });
};


function toDash() {
    window.location.href = "dashboard.html"
}

function seeall() {
    window.location.href = "history.html"
}

// Airtime Button
function goAir() {
    window.location.href = "airtime.html"
}

// Airtime Page
const networkOperatorButtons = document.querySelectorAll('.holding button');

// Loop through each button and add a click event listener
networkOperatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const networkOperatorName = button.querySelector('.net').textContent;
    alert(`You have selected ${networkOperatorName}`);
  });
});