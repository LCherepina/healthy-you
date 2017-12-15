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

    /*$('.cereals-kind').onclick = function () {
        document.getElementsByClassName('food-kind').style.display = 'none';
        document.getElementById('cereals').style.display = 'inline-block';
    }*/

    $('.cereals-kind').on('click', function () {
        var element = document.getElementById("food-kind");
        element.classList.add("hiddendiv");
    });


/*
   $('.cereals-kind').on('click', function () {
       document.getElementsByClassName('food-kind').addClass('hiddendiv');
       document.getElementById('cereals').removeClass('hiddendiv');
   }) ;*/
});