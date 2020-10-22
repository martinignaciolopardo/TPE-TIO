<?php
    require_once ('home.php');

    class publicController{
        private $view;

        public function __construct(){
            $this->view = new Index();
        }

        function homeController(){
            $this->view->home();
        }