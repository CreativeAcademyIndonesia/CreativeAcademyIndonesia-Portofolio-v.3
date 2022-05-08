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
