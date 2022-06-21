const navbar = document.getElementsByClassName('mynav')[0];

window.addEventListener('scroll', function() {
    if (window.pageYOffset <= 0 ) {
        navbar.style.background = 'transparent';
    } else if (window.pageYOffset > 0) {
        navbar.style.background = 'var(--primarycolor)';
    }
})


// Divider Relative
window.addEventListener('load', function() {  
    const divider = document.getElementsByClassName('divider');
    Array.from(divider).forEach(function (d) {
        let h2 = d.previousElementSibling.offsetWidth;
        d.style.width = h2 * 0.75 + 'px';
        console.log(d);
        console.log(h2);
    });
})


// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    dots : false,
    navText: [
	    "<i class='fa-solid fa-angle-left position-absolute top-50 start-50 translate-middle'></i>",
	    "<i class='fa-solid fa-angle-right position-absolute top-50 start-50 translate-middle'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});