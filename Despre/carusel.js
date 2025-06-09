let scrollContainer = document.querySelector(".editii");
let myImg = document.querySelector(".editii img");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let currWidth = myImg.clientWidth + 20;

let images = document.querySelectorAll(".editii img");
images.forEach((img) => {
    img.addEventListener("mousedown", (e) => e.preventDefault());
});

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += currWidth;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= currWidth;
});

let isDragging = false;
let startX;
let scrollLeftStart;

scrollContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeftStart = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = "grabbing";
});

scrollContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    scrollContainer.style.cursor = "default";
});

scrollContainer.addEventListener("mouseup", () => {
    isDragging = false;
    scrollContainer.style.cursor = "default";
});

scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const moveDistance = x - startX;
    scrollContainer.scrollLeft = scrollLeftStart - moveDistance;
});