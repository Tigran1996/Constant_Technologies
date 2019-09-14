$(document).ready(function () {

    var menuLeft = document.getElementById("menu-left");
    menuLeft.addEventListener("click", function() {
        this.classList.toggle("active");
    });
    $("#menu-left").click(function () {
        $("nav").toggleClass("nav_show");
        $(".nav_head_show , .nav_body , .nav_footer").toggleClass("hide_nav")
    })
    $(".dropdown_arrow").click(function () {
        $(this).siblings("ul").toggleClass("d-none");
    })

    $('#owl-demo').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:true,
        singleItem:true,
        navText: [
            '<div class="right"><i class="fas fa-arrow-left"></i></div>',
            '<div class="left"><i class="fas fa-arrow-right"></i></div>'
        ],
        navContainer: '.main-four .custom-nav',
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }

    });
    $(".dots div").click(function () {
        $(".dots div").removeClass("active_dot");
        $(this).addClass("active_dot");
        $(".carousel-main > div").addClass("carousel_none")
        var data = $(this).attr("data-id");
        $(".carousel-"+data+"").removeClass("carousel_none")
    })
});