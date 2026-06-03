
const slides = JSON.parse(
    document.getElementById("slides-data").textContent
);

let index = 0;
let hideTimeout;
let isMouseInside = false;

const img = document.getElementById("slide");
const caption = document.getElementById("caption");
const viewer = document.getElementById("viewer");

const leftZone = document.getElementById("leftZone");
const rightZone = document.getElementById("rightZone");

function render() {
    img.src = slides[index].img;
    caption.textContent = slides[index].caption;
}

function next() {
    if (index < slides.length - 1) {
        index++;
        render();
    }
}

function prev() {
    if (index > 0) {
        index--;
        render();
    }
}

function showUI() {
    viewer.classList.add("show-ui");

    clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
        viewer.classList.remove("show-ui");
    }, 3000);
}

rightZone.addEventListener("click", (e) => {
    next();
});

leftZone.addEventListener("click", (e) => {
    prev();
});

viewer.addEventListener("touchstart", () => {
    showUI();
}, { passive: true });

viewer.addEventListener("mouseenter", () => {
    isMouseInside = true;
    showUI();
});

viewer.addEventListener("mousemove", () => {
    if (isMouseInside) {
        showUI();
    }
});

viewer.addEventListener("mouseleave", () => {
    isMouseInside = false;
    clearTimeout(hideTimeout);
    viewer.classList.remove("show-ui");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next(), showUI();
    if (e.key === "ArrowLeft") prev(), showUI();
});

render();