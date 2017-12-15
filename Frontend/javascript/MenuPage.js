// $(function(){
//     $('#draggable').draggable({
//     snap: "#snapper",
//     snapMode: "inner",
//     snapTolerance: 20
//     });
// });

// $('#draggable').draggable(//{
//     // snap: "#snapper",
//     // snapMode: "inner",
//     // snapTolerance: 20
// });

//  $( function() {
//     $( "#draggable" ).draggable();
// } );

$(function(){

    $('.draggable').draggable({
        snap: ".droppable",
        snapMode: "inner",
        snapTolerance: 20
    });

    $( ".selector" ).draggable({
        stop: function(event, ui) {
            var x = ui.instance.element.position();
            $("#image1").css({"position":"fixed","left":x.left,"top":x.top});
        }
    });

    /*$('.cereals-kind').onclick = function () {
        document.getElementsByClassName('food-kind').style.display = 'none';
        document.getElementById('cereals').style.display = 'inline-block';
    }*/

    /*$("#back").on('click', function(){
       $(".food-kind").show();
       $(".food").hide();
       $("#back").hide();
    });

    $('.cereals-kind').on('click', function () {
        $(".food-kind").hide();
        $("#cereals").show();
        $("#back").show();
    });

    $('.dairy-kind').on('click', function () {
        $(".food-kind").hide();
        $("#diary").show();
        $("#back").show();
    });

    $('.meat-kind').on('click', function () {
        $(".food-kind").hide();
        $("#meat").show();
        $("#back").show();
    });

    $('.vega-kind').on('click', function () {
        $(".food-kind").hide();
        $("#vega").show();
        $("#back").show();
    });

    $('.fruits-kind').on('click', function () {
        $(".food-kind").hide();
        $("#fruits").show();
        $("#back").show();
    });*/


/*
   $('.cereals-kind').on('click', function () {
       document.getElementsByClassName('food-kind').addClass('hiddendiv');
       document.getElementById('cereals').removeClass('hiddendiv');
   }) ;*/
});