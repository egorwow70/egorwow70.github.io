$(document).ready(function($) {
    $("#js-button").on("click", function(e) {
        e.preventDefault();
        var top = $("#js-plan").offset().top;
        $("html,body").animate({
            scrollTop: top
        }, 500);
    });
});

$(document).ready(function($) {
    var imageElement = document.querySelector('.logo');
    var element = document.querySelector('.container1');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            imageElement.setAttribute('src', 'img/logo.svg');
            element.classList.add("scrolled");
        } else {
            imageElement.setAttribute('src', 'img/logo-light.svg');
            element.classList.remove("scrolled");
        };
    });
});