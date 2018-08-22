
$(window).on('load', function() {
    // Page Preloader
    $('.spinner-wrapper').fadeOut('slow', function() {
        $(this).remove();
    });
});
    
$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})



function openNav() {
    document.getElementById("sidebar-nav").style.width = "260px";
}

function closeNav() {
    document.getElementById("sidebar-nav").style.width = "0";
}
function openItem() {
    document.getElementById("sidebar-item").style.width = "260px";
}

function closeItem() {
    document.getElementById("sidebar-item").style.width = "0";
}
function openItem2() {
    document.getElementById("sidebar-item2").style.width = "260px";
}

function closeItem2() {
    document.getElementById("sidebar-item2").style.width = "0";
}
function openItem3() {
    document.getElementById("sidebar-item3").style.width = "260px";
}

function closeItem3() {
    document.getElementById("sidebar-item3").style.width = "0";
}

// function toggleSidebar(){
//     document.getElementById("sidebar").classList.toggle('active');
// }


$(document).ready(function(){

    $(".topLink").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
    }
    });
});

$(document).ready(function(){

    $(".cd-top").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
    }
    });
});



// navbar
window.onscroll = function() {
    myFunction();
    myFunction2();
} ;

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}



 
function myFunction2() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("myP");
        myp.style.display="block"        
        
    } else {
        myp.style.display="none";
    }
}


