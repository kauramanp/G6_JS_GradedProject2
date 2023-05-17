var loginButton = document.getElementById("loginButton")

var credentials = [];

window.onload = () => {
    console.log("data " + user_creds)
    if (user_creds.length != 0) {
        credentials = user_creds;

    }
}

loginButton.onclick = function () {

    var username = document.getElementById("email").value
    var password = document.getElementById("password").value
    console.log("username " + username.value);
    console.log("password " + password.value);
    if ((username == null || username === "") || (password == null || password === "")) {
        alert("Enter Email and password to login");
    } else {
        var isFound = false
        credentials.forEach(element => {
            if (element.username == username && element.password == password) {
                isFound = true

            }
        });

        if (isFound) {
            window.location.replace("../view_resume/view_resume.html");

        } else {
            alert("Sorry Credentials are incorrect or not found");

        }
    }
};