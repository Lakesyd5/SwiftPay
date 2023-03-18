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
// if (!hisdata && history) {
//     history.innerHTML = `<h3 class="histno">No Transactions yet</h3>`
// }

if (history && hisdata && loggedhistory) {
    // let userTransactions = hisdata.filter (transaction => {
    //     return (
    //         (transaction.from_firstname + ' ' + transaction.from_lastname) == loggedhistory.firstname + ' ' + loggedhistory.lastname ||
    //         (transaction.to_firstname + ' ' + transaction.to_lastname) == loggedhistory.firstname + ' ' + loggedhistory.lastname
    //     );
    // });
    // let userTransactions = hisdata.filter((tranz)=> tranz.from == loggedhistory.firstname+ " " +loggedhistory.lastname) ||(tranz.to == loggedhistory.firstname + ' ' + loggedhistory.lastname)
    let userTransactions = hisdata.filter((tranz) => (tranz.from == loggedhistory.firstname + " " + loggedhistory.lastname) || (tranz.to == loggedhistory.firstname + ' ' + loggedhistory.lastname))
    // console.log(userTransactions);

    if (userTransactions.length === 0) {
        history.innerHTML = `<h3 class="histno">No transactions yet</h3>`;
    } else {

        userTransactions.forEach((transaction) => {
            let amount = transaction.amount.toFixed(2);
            if (transaction.from == loggedhistory.firstname + " " + loggedhistory.lastname) {
                amount = "-" + amount;
                amountClass = "from";
            } else {
                amount = "+" + amount;
                amountClass = "to";
            }
            let transactionHTML = `<div class = "dta">
                <div class="narat">
                <div>Payment ${transaction.from == loggedhistory.firstname + " " + loggedhistory.lastname ? "to" : "from"} ${transaction.from == loggedhistory.firstname + " " + loggedhistory.lastname ? transaction.to : transaction.from}</div>
                </div>
                <div class="prc">
                    <div class="${amountClass}">NGN ${amount}</div>
                </div>
            </div>`;
            history.innerHTML += transactionHTML;
        });

    }

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

// if (!hisdata && hisContent) {
//     hisContent.innerHTML = `<h3 class="histsec">No Transactions yet</h3>`
// }

if (hisContent && hisdata && loggedhistory) {
    let userTransactions = hisdata.filter((tranz) => (tranz.from == loggedhistory.firstname + " " + loggedhistory.lastname) || (tranz.to == loggedhistory.firstname + ' ' + loggedhistory.lastname))
    // console.log(userTransactions);

    if (userTransactions.length === 0) {
        hisContent.innerHTML = `<h3 class="histsec">No transactions yet</h3>`;
    } else {

        userTransactions.forEach((transaction) => {
            let amount = transaction.amount.toFixed(2);
            if (transaction.from == loggedhistory.firstname + " " + loggedhistory.lastname) {
                amount = "-" + amount;
                amountClass = "from";
            } else {
                amount = "+" + amount;
                amountClass = "to";
            }
            let transactionHTML = `<div class = "daa">
                <div class="narat">
                <div>Payment ${transaction.from == loggedhistory.firstname + " " + loggedhistory.lastname ? "to" : "from"} ${transaction.from == loggedhistory.firstname + " " + loggedhistory.lastname ? transaction.to : transaction.from}</div>
                </div>
                <div class="prc">
                    <div class="${amountClass}"> ${amount}</div>
                </div>
            </div>`;
            hisContent.innerHTML += transactionHTML;
        });
    }

};


function toDash() {
    window.location.href = "dashboard.html"
}

function seeall() {
    window.location.href = "history.html"
}

// Airtime Button(On Dashboard)
function goAir() {
    window.location.href = "airtime.html"
}

// Airtime Page
let airtimeData = [];
let user = JSON.parse(localStorage.getItem("loggeduser"));
let networkOperatorButtons = document.querySelectorAll('.holding button');
let selectedNetworkOperator;
let selectedAirtimeAmount;
let selectedButton;

let transactions = JSON.parse(localStorage.getItem('Transhistory'));
let mainAccount = JSON.parse(localStorage.getItem('account'));


// Loop through each button and add a click event listener
networkOperatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedNetworkOperator = button.querySelector('.net').textContent;
        selectedButton = button

        // Check if both network operator and airtime amount have been selected before pushing to array
        if (selectedNetworkOperator && selectedAirtimeAmount) {
            let airtimeImage = selectedButton.querySelector('img').src;
            let airtime = {
                image: airtimeImage,
                airtime: selectedNetworkOperator,
                amount: selectedAirtimeAmount,
                boughtBy: `${user.firstname}`,
                transactionType: "airtime"
            };
            airtimeData.push(airtime);
            console.log(airtime);
            selectedNetworkOperator = null;
            selectedAirtimeAmount = null;
            localStorage.setItem('airtimeData', JSON.stringify(airtimeData));
        }

        alert(`You have selected ${selectedNetworkOperator}`);
    });
});

// Top Up Button
let topUpBtn = document.querySelector('.airtimeamt button');
if (topUpBtn) {

    topUpBtn.addEventListener('click', () => {
        selectedAirtimeAmount = document.querySelector('.airtimeamt input').value;
        console.log(selectedAirtimeAmount);
        if (selectedNetworkOperator && selectedAirtimeAmount) {
            let airtimeImage = selectedButton.querySelector('img').src;

            // user.balance -= parseInt(selectedAirtimeAmount);
            // let userIndex = mainAccount.findIndex(account => account.firstname == user.firstname);
            // mainAccount[userIndex].balance -= parseInt(selectedAirtimeAmount);

            let airtime = {
                image: airtimeImage,
                airtime: selectedNetworkOperator,
                amount: selectedAirtimeAmount,
                boughtBy: `${user.firstname}`,
                transactionType: "airtime"
            };
            airtimeData.push(airtime);
            transactions.push(airtime);
            console.log(airtime);
            selectedNetworkOperator = null;
            selectedAirtimeAmount = null;

            localStorage.setItem('airtimeData', JSON.stringify(airtimeData));
            localStorage.setItem('loggeduser', JSON.stringify(user));
            localStorage.setItem('Transhistory', JSON.stringify(transactions));
            localStorage.setItem('account', JSON.stringify(mainAccount))
            alert('Top-Up successful');
            window.location.href = "airtime2.html"
        } else if (selectedNetworkOperator) {
            alert('Please select an airtime amount')
        } else {
            alert('Please select a network operator and airtime amount');
        }
    });
};

// Buy Airtime Button
let buyAirtimeBtn = document.getElementById('makepay');
let airtimescrn = document.querySelector('.airscreen');
let airdat = JSON.parse(localStorage.getItem('airtimeData'));
let airPin = document.getElementById('airpin');
let selectAirtime = airdat[airdat.length - 1].amount;

if (airtimescrn) {
    airdat.forEach(element => {
        airtimescrn.innerHTML += `<div class="ine">
        <img src="${element.image}" alt="">
    <p>You are about to top up with</p>
    <div class="price">NGN ${element.amount}<div>
    </div>`
    });
}

if (buyAirtimeBtn) {

    buyAirtimeBtn.addEventListener('click', () => {
        if (airPin.value == user.pin) {
            user.balance -= parseFloat(selectAirtime);
            let userIndex = mainAccount.findIndex(account => account.firstname == user.firstname);
            mainAccount[userIndex].balance -= parseFloat(selectAirtime);
            console.log(mainAccount);
            console.log(selectedAirtimeAmount);

            alert("Recharge successful");
            // window.location.href = "airtimestatus.html";

            localStorage.setItem('loggeduser', JSON.stringify(user));
            localStorage.setItem('account', JSON.stringify(mainAccount));
        } else {
            alert("Invalid PIN")
        }
    })
}


// Airtime Status

let stat = document.getElementById("success");
let sucData = JSON.parse(localStorage.getItem('airtimeData'))

if (stat) {
    sucData.forEach(element => {
        stat.innerHTML += `<div class="succ">
    <img src="./images/Group 82.png" alt="">
        <h3>Recharge Successful</h3>
        <div>You bought <b>${element.airtime}</b> worth <b>NGN ${element.amount}</b> </div>
    </div>`
    });
}

// Done Button (Airtime Status Page)
let doneBtn = document.getElementById("done");
if (doneBtn) {
    doneBtn.addEventListener('click', () => {
        window.location.href = "dashboard.html"
    });
}