document.addEventListener("DOMContentLoaded", function ()
     {
        "use strict";

        document.querySelector("#mostrar-menu").addEventListener("click",  function() 
        {
            document.querySelector("#desplegable").classList.toggle("desplegable");
        });

        document.querySelector("#enviar").addEventListener("click", validarcaptcha);

        function validarcaptcha(e) 
        {
            e.preventDefault();
            let captcha = document.querySelector("#input-captcha").value;
            captcha = captcha.toLowerCase();
            if (captcha == "just example") 
            {
                let formularioenviado = document.querySelector("#resultado");
                formularioenviado.innerHTML = "¡Captcha correcto!";
            }
            else 
            {
                let error = document.querySelector("#resultado");
                error.innerHTML = "Error, captcha incorrecto.";
            }
        };
    }
);