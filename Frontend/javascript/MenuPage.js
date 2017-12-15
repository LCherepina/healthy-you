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


   $('.cereals-kind').onclick(function () {
       document.getElementsByClassName('food-kind').style.display = 'none';
       document.getElementById('cereals').style.display = 'inline-block';
   }) ;
});