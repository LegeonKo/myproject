import '/assets/app.sass'
import '/assets/fonts/stylesheet.css'

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        startPosition: 2,
        autoWidth: true,
        center: true,
        items: 4,
        loop: true,
        margin: 20
    });
});