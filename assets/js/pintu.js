/* Side Navigation Slide Function */

function openNav() {
    document.getElementById("pintuSideNav").style.width = "85%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("pintuSideNav").style.width = "0";
    document.body.style.backgroundColor = "white";
}



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