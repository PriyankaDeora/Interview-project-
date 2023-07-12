document.getElementById("signin-form").addEventListener("submit",function(event) {
    event.preventDefault();

    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Sign in successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});