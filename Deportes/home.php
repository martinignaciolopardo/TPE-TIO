<?php
    require_once './libs/smarty/Smarty.class.php';


class Index{

    public function __construct(){
        $this->title = "Index";
        $this->smarty = new Smarty();
    }
    function home(){
        $this->smarty->assign("title", $this->title);
        $this->smarty->display('./templates/home.tpl');
    }
}

