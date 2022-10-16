// global variable declaration start here
const galleryItem = document.querySelectorAll(".gallery-item"),
    modal = document.querySelector(".modal"),
    html = document.querySelector("html");
// global variable declaration start here
// modal structure start here
modal.innerText = "";
div = document.createElement("div");
div.classList.add("modal-content");
div.innerHTML = `<div class="modal-close">
<span class="modal-bar rotate1">bar</span>
<span class="modal-bar hide">bar</span>
<span class="modal-bar rotate2">bar</span>
</div>
<figure class="modal-figure">
<img src="" alt="Modal Image" class="modal-image">
</figure>`
modal.appendChild(div);
const modalClose = div.children[0];
// modal structure end here
// add and remove class function start here
function appearClass() {
    modal.classList.add("appear");
    html.classList.add("remove-scroll");
};
function removeClass() {
    modal.classList.remove("appear");
    html.classList.remove("remove-scroll");
};
// add and remove class function start here
// Modal function start here
galleryItem.forEach(function (image, index) {
    image.addEventListener("click", function () {
        const modalImg = document.querySelector(".modal-image"),
            galleryImage = document.querySelectorAll(".gallery-img");
        modalImg.src = galleryImage[index].src;
        appearClass();
    });
});
modalClose.addEventListener("click", function () {
    removeClass();
});
// Modal function end here
//  event for outside click and escape btn start here

modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        removeClass();
    };
});

window.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        removeClass();
    };
});
//  event for outside click and escape btn start here
