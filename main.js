// Listen for button click on hamburger icon and show nav
// Create hamburger nav html

$("body").on('click', '.hamburger', function() {
    $(".nav-links").toggleClass("nav-show");
});

$("body").on('click', 'li', function() {
    $(".nav-links").toggleClass("nav-show");
});