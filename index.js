$(document).ready(function(){
    $('#nav-menu').click(function(){
      $(this).toggleClass('open');
      $("#menu").toggleClass('menu-open');
    });
});

function nav_aboutme() {
    $('html, body').animate({
        'scrollTop': $('#section-2').offset().top
    }, 1500);
}

function nav_education() {
    $('html, body').animate({
        'scrollTop': $('#section-3').offset().top
    }, 1500);
}

function nav_projects() {
    $('html, body').animate({
        'scrollTop': $('#section-4').offset().top
    }, 1500);
}

function nav_contactme() {
    $('html, body').animate({
        'scrollTop': $('#section-5').offset().top
    }, 1500);
}

function nav_home() {
    $('html, body').animate({
        'scrollTop': $('#header').offset().top
    }, 1500);
}

