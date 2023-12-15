import Environment from '../Envairoment.js';

export function registerUser(nombres,apellidos,numeroIdentificacion,TipoIdentificacion,email,username, password) {
    return fetch(Environment.apiRegistro, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({
            nombres: nombres,
            apellidos: apellidos,
            numeroIdentificacion: numeroIdentificacion,
            TipoIdentificacion: TipoIdentificacion,
            email: email,
            nombreUser: username,
            password: password,
        })
    })
}