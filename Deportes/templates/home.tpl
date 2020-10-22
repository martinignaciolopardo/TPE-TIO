<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{$title}</title>
            <base href="{BASE_URL}">
            <link rel="stylesheet" href="css/style.css">
            <script type="text/javascript" src="js/main.js"></script>
        </head>
        
        <body>
            <header class="header-container">
                <figure class="left-box">
                    <img class="fotoheader" src="images/logo.jpg" alt="Pelotas de los distintos deportes">
                </figure>
                <figure class="right-box">
                    <img id="mostrar-menu" class="hamburguesa" src="images/btn.png" alt="Menu desplegable">
                </figure>
                <nav class="navpc">
                    <ul>
                        <li class="boton"><a href="index.html">Home</a></li>
                        <li class="boton"><a href="html2.html">Info</a></li>
                        <li class="boton"><a href="html1.html">Deportes</a></li>
                    </ul>
                </nav>
            </header>
            <article class="content-container">
                <section class="left-subcontainer">
                    <h1>
                        Tu deporte favorito
                    </h1>
                    <p>
                        ¿Cuántas veces has querido practicar un deporte, y no sabes cual es el mejor para vos y tu estilo de
                        vida? ¿Cuántas veces has arrancado un deporte y no te gusto? ¿Qué es lo mejor para vos?
                        Todas esas preguntas te las podemos responder. Somos una pagina dedicada a brindarte información de los
                        10
                        deportes más practicados en la argentina. Vamos a ayudarte a saber qué es lo mejor para vos y tu físico.
                        No vas a tener que empezar un deporte y a la semana tener que dejar, porque acá te vamos a ofrecer:
                    </p>
                    <ul class="lista">
                        <li>Brindar info de cada deporte</li>
                        <li>Saber qué es lo que necesitas para practicarlo</li>
                        <li>Quienes son los mejores deportistas de cada deporte</li>
                    </ul>
                    <figure>
                        <img class="imagenindex" src="images/izquierda.jpg" alt="Mujer levantando pesas">
                    </figure>
                </section>
                <section class="center-subcontainer">
                    <h3>¿Por qué me cuesta hacer deporte?</h3>
                    <p>
                        Una de las principales razones por la que más nos cuesta hacer deporte es porque no
                        hemos encontrado uno que realmente nos guste. Cuando no disfrutamos se nos hace muy
                        pesado y para ser constante es necesario tener una fuerza de voluntad ferrea.
                        Por eso, lo normal en estos casos es que lo intentemos y al poco tiempo abandonemos nuestro objetivo.
                        Si no quieres que la historia se vuelva a repetir, prueba a hacer nuestro test y descubre
                        qué deporte practicar según tu personalidad. ¡Seguro que notas la diferencia! Y si no,
                        siempre puedes volver a probar.
                    </p>
                    <figure>
                        <img class="imagenindex" src="images/centro.jpg" alt="Hombre compitiendo en velocidad">
                    </figure>
                </section>
                <section class="raffle-subcontainer">
                    <h3>
                        ¡Participá del sorteo! <br> Podes ganar una camiseta a elección de la <br> Selección Argentina
                    </h3>
                    <form>
                        <header class="topraffle">
                            <div>
                                <p>Nombre</p><input class="itemformulario" type="text" name="nombre" value=""
                                    placeholder="Tu nombre" />
                            </div>
                            <div>
                                <p>Apellido</p><input class="itemformulario" type="text" name="nombre" value=""
                                    placeholder="Tu apellido" />
                            </div>
                            <div>
                                <p>Ciudad</p><input class="itemformulario" type="text" name="nombre" value=""
                                    placeholder="Ciudad" />
                            </div>
                            <div>
                                <p>Direccion</p><input class="itemformulario" type="text" name="nombre" value=""
                                    placeholder="Direccion" />
                            </div>
                            <div>
                                <p>Telefono</p><input class="itemformulario" type="text" name="nombre" value=""
                                    placeholder="Telefono" />
                            </div>
                            <div>
                                <p>Mail</p><input class="itemformulario" type="text" name="nombre" value=""
                                    placeholder="Tu mail" />
                            </div>
                        </header>
                        <div class="centerraffle">
                            <h3>SELECCIONÁ DONDE VIVIS</h3>
                            Argentina<input type="radio" name="documento" />
                            Fuera de Argentina<input type="radio" name="documento" />
                            <h3>FECHA DE NACIMIENTO</h3>
                            <input type="date" />
                            <h3>INDICÁ TU TALLA</h3>
                            <input type="range">
                            <p>XS--S--M--L--XL--XXL</p>
                        </div>
                        <footer class="footerraffle">
                            <h3>¡SOY HUMANO!</h3>
                            <label for="captcha">Captcha</label>
                            <input type="text" id="captcha">
                            <label for="input-captcha">Ingresá el captcha</label>
                            <input id="input-captcha" type="text" placeholder="Aquí">
                            <input id="enviar" type="submit" value="Enviar" />
                            <p class="resultado-captcha" id="resultado"></p>
                        </footer>
                    </form>
                </section>
            </article>
            <footer class="footer-container">
                <div class="buscanos">
                    Buscanos en nuestras redes sociales!
                </div>
                <figure class="redes">
                    <img class="instagram" src="images/instagram.png" alt="logo de instagram">
                    <img class="twitter" src="images/twitter.png" alt="logo de twitter">
                    <img class="facebook" src="images/facebook.png" alt="logo de facebook">
                </figure>
            </footer>
        </body>
        
        </html>