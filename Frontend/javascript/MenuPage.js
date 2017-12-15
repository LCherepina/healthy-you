

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

});