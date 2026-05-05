window.addEventListener("scroll", function() {
    let value = window.scrollY;

    document.getElementById("one").style.top = value * 0.2 + "px";
    document.getElementById("third").style.top = value * 0.4 + "px";
    document.getElementById("two").style.top = value * 0.1 + "px";
});

let lastScroll = 0;
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        navbar.style.transform = "translate(-50%, -120%)";
    } else {
        navbar.style.transform = "translate(-50%, 0)";
    }

    lastScroll = currentScroll;
});