var loginButton = document.getElementById("loginButton")

loginButton.onclick = function () {

    var username = document.getElementById("email")
    var password = document.getElementById("password")
    console.log("username " + username.value);
    console.log("password " + password.value);
    if ((username.value == null || username.value === "") || (password.value == null || password.value === "")) {
        alert("Enter Email and password to login");
    } else {

    }
};