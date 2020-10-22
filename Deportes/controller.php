<?php
    require_once ('view.php');

    class publicController{
        private $view;

        public function __construct(){
            $this->view = new view();
        }

        function homeController(){
            $this->view->home();
        }

        function infoController() {
            $this->view->info();
        }

        function sportsController() {
            $this->view->deportes();
        }
    }
