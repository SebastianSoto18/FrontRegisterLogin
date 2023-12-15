import {registerUser} from '../services/RegisterService.js';

var registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
    var TipoIdentificacion = document.getElementById("tipoIdentificacion").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("nombreUser").value;
    var password = document.getElementById("password").value;
    

    registerUser(nombres,apellidos,numeroIdentificacion,TipoIdentificacion,email,username, password).then((response) => {
        if(response.status == 200){
            swal("Usuario registrado con exito", "" ,"success");
            window.location.href = "index.html";
        }
    }).catch((error) => {
        console.log(error);
        swal("Error al registrar el usuario", "" ,"error");
    });
});