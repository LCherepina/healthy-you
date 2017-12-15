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
});