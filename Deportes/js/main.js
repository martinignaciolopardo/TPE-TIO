document.addEventListener('DOMContentLoaded', captcha)


function captcha() {
    "use strict"
    let random = Math.floor(Math.random(10000 - 100000) * 100000);
    let captcha = document.getElementById('captcha');
    captcha.value = random;

    function validacion() {
        event.preventDefault()
        let usuario = document.getElementById('input-captcha').value;
        let mensaje = document.getElementById('resultado');
        if (usuario != random) {
            mensaje.innerHTML = "Captcha incorrecto";
        } else {
            mensaje.innerHTML = "Muchas gracias!";
        }


    }


    let boton = document.getElementById('enviar');
    boton.addEventListener('click', validacion);
}