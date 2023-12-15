const blue = "rgba(1,131,239,0.53)";
const white = "white";

var loginButton = document.getElementById("login");
var loginForm = document.getElementById("login-form");

var registerButton = document.getElementById("register");
var registerForm = document.getElementById("register-form");

var loginUserInput = document.getElementById("user-input");
var loginPasswordInput = document.getElementById("pass-input");


loginButton.style.color = white;
loginButton.style.backgroundColor = blue;

loginButton.addEventListener("click", function(){
    loginButton.style.color = white;
    loginButton.style.backgroundColor = blue;
    registerButton.style.color = blue;
    registerButton.style.backgroundColor = white;
    loginUserInput.value = "";
    loginPasswordInput.value = "";

    registerForm.classList.add("animate__flipOutY");
    setTimeout(() => {
        registerForm.classList.remove("animate__flipOutY");
        registerForm.style.display = "none";
        loginForm.style.display = "flex";
        loginForm.classList.add("animate__flipInY");
    }, 800);
});

registerButton.addEventListener("click", function(){
    registerButton.style.color = white;
    registerButton.style.backgroundColor = blue;
    loginButton.style.color = blue;
    loginButton.style.backgroundColor = white;

    loginForm.classList.add("animate__flipOutY");
    setTimeout(() => {
        loginForm.classList.remove("animate__flipOutY");
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
        registerForm.classList.add("animate__flipInY");
    }, 800);
});