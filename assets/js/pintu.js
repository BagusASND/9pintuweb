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