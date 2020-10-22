<?php
    require_once 'controller.php';
    require_once 'RouterClass.php';

    
    // CONSTANTES PARA RUTEO
    define("BASE_URL", 'http://'.$_SERVER["SERVER_NAME"].':'.$_SERVER["SERVER_PORT"].dirname($_SERVER["PHP_SELF"]).'/');


    $r = new Router();

    // PUBLIC CONTROLLER
    $r->addRoute("home", "GET", "publicController", "homeController"); //vista home

    //Ruta por defecto.
    $r->setDefaultRoute("publicController", "homeController");

    //run
    $r->route($_GET['action'], $_SERVER['REQUEST_METHOD']); 

?>