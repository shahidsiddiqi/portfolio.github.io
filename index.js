let head = document.querySelector("head");

window.addEventListener("scroll", () => {
    head.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");



    const sr = ScrollReveal({
    distance: "15px",
    duration: 2000,
    reset: true,
});

sr.reveal(".home-text, .about-img", {
    delay: 200,
    origin: "left",
});

sr.reveal(".home-img, .about-text", {
    delay: 200,
    origin: "right",
});

sr.reveal(
    ".skills, .contact",
    {
        delay: 200,
        origin: "bottom",
    }
);
