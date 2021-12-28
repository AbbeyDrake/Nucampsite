//BELOW: ready method - when the page loads and is ready, run what's inside of code block. First, sets carousel's interval to 2000ms. Then uses jQuery method called click which sets up an event handler to run pause and cycle functions when the buttons are clicked

$(function() {
    $(".carousel").carousel( { interval: 2000 } );

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
});


