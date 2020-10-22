<?php
    require_once './libs/smarty/Smarty.class.php';


class view{

    public function __construct(){
        $this->homeTitle = "Index";
        $this->infoTitle = "Info";
        $this->sportsTitle = "Deportes";
        $this->smarty = new Smarty();
    }
    function home(){
        $this->smarty->assign("title", $this->homeTitle);
        $this->smarty->display('./templates/header.tpl');
        $this->smarty->display('./templates/home.tpl');
        $this->smarty->display('./templates/footer.tpl');
    }
    function info() {
        $this->smarty->assign("title", $this->infoTitle);
        $this->smarty->display('./templates/header.tpl');
        $this->smarty->display('./templates/info.tpl');
        $this->smarty->display('./templates/footer.tpl');
    }
    function deportes() {
        $this->smarty->assign("title", $this->sportsTitle);
        $this->smarty->display('./templates/header.tpl');
        $this->smarty->display('./templates/deportes.tpl');
        $this->smarty->display('./templates/footer.tpl');
    }
}

