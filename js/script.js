// script.js

$(function() {

    // DRAGGABLE
    $(".box").draggable();

    $("#box1").draggable({ scroll: true, revert: "invalid" });
    $("#box2").draggable({ axis: "x" });
    $("#box3").draggable({ axis: "y" });
    $("#box4").draggable({ containment: ".container" });

    // DROPPABLE
    $("#droppable").droppable({
        accept: '#box1',
        drop: function() {
            $(this).find('span').html("when a box got attitude, drop it like its hot")
        }
    });

    // Sortable
    $('#sortable').sortable({connectWith: "#sortableToo", placeholder: "placeholderBox"});
    $('#sortableToo').sortable({connectWith: "#sortable", placeholder: "placeholderBox"});

    // Accordion
    $('#accordion').accordion({collapsible: true, heightStyle: "content"});
    
    // Datepicker
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        //numberOfMonths: 2,
        minDate: -1,
        maxDate: "1W +5D"
    });

});