
$(function(){

});

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});

$(".right").click(function(){
    $("#myCarousel").carousel("next");
});

var $food_list = $("#food-info");
var $sport_list = $("#sport-info");
var info_food_list = require('infoFoodList.ejs');
var Templates = require('./templates');

function showFoodInfo(list) {
    //Очищаємо старі піци в кошику
    $food_list.html("");

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