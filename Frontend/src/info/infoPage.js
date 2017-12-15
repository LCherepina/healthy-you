

//var Templates = require('.../templates');

var $food_list = $("#food-info");
var $sport_list = $("#sport-info");

var info_food_list = require('../infoFoodList');


function showFoodInfo(list) {
    //Очищаємо старі піци в кошику
    //$food_list.html("");

    //Онволення однієї піци
    function showOneBox(info_box) {

        var html_code = Templates.infoBox({info_box: info_box});

        var $node = $(html_code);

        $food_list.append($node);
    }

    list.forEach(showOneBox);
}

function showSportInfo(list) {
    $sport_list.html("");

    //Онволення однієї піци
    function showOneBox(info_box) {

        var html_code = Templates.infoBox({info_box: info_box});

        var $node = $(html_code);

        $sport_list.append($node);
    }

    list.forEach(showOneBox);
}

function initialiseMenu() {
    showFoodInfo(info_food_list);
}



exports.initialiseMenu = initialiseMenu;