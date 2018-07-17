/* Side Navigation Slide Function */

function openNav() {
    document.getElementById("pintuSideNav").style.width = "85%";
    $("#togleNav").addClass("overlay-sidenav");
}

function closeNav() {
    document.getElementById("pintuSideNav").style.width = "0";
    $("#togleNav").removeClass("overlay-sidenav");
}


/*Anchor scroll to top*/

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});


/* Sticky Mobile Header Function */

window.onscroll = function() {stickySearchBar()};

var header = document.getElementById("rowSearch");
var search = document.getElementById("icSearch");
var sticky = header.offsetTop;

function stickySearchBar() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        search.classList.add("hidden")
    } else {
        header.classList.remove("sticky");
        search.classList.remove("hidden");
    }
}


/*Content Slide Carousel*/
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var multiSlides       = document.querySelector('.js_multislides');


    function handleDotEvent(e) {
        if (e.type === 'before.lory.init') {
            for (var i = 0, len = dot_count; i < len; i++) {
                var clone = dot_list_item.cloneNode();
                dot_container.appendChild(clone);
            }
            dot_container.childNodes[0].classList.add('active');
        }
        if (e.type === 'after.lory.init') {
            for (var i = 0, len = dot_count; i < len; i++) {
                dot_container.childNodes[i].addEventListener('click', function(e) {
                    dot_navigation_slider.slideTo(Array.prototype.indexOf.call(dot_container.childNodes, e.target));
                });
            }
        }
        if (e.type === 'after.lory.slide') {
            for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                dot_container.childNodes[i].classList.remove('active');
            }
            dot_container.childNodes[e.detail.currentSlide - 1].classList.add('active');
        }
        if (e.type === 'on.lory.resize') {
            for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                dot_container.childNodes[i].classList.remove('active');
            }
            dot_container.childNodes[0].classList.add('active');
        }
    }


    lory(multiSlides, {
        infinite: 1,
        slidesToScroll: 1,
        enableMouseEvents: true
    });

});