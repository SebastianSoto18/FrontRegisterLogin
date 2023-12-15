import {loginUser} from "../services/LoginService.js";

var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    var user = document.getElementById("user-input").value;
    var pass = document.getElementById("pass-input").value;
    loginUser(user, pass).then((response) => {
        console.log(response.json().then((data) => {
            if(response.status == 200){
                swal("Credenciales verificadas", "Bienvenido  " + data ,"success");
            }
        }));
    }).catch((error) => {
        console.log(error);
        swal("Error al iniciar sesión", "" ,"error");
    });
    document.getElementById("user-input").value = "";
    document.getElementById("pass-input").value = "";
});