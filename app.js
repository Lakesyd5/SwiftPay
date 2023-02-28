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
repeat = document.getElementById("repeat")


function create() {
    if (repeat.value !== password.value) {
        alert("Password does Not Match")
    }else {
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
        localStorage.setItem("account", JSON.stringify(accountInfo))
    }
}