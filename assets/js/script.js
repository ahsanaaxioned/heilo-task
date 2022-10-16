// global variable declaration start here
const galleryItem = document.querySelectorAll(".gallery-item"),
    modal = document.querySelector(".modal"),
    html = document.querySelector("html");
// global variable declaration start here
// modal structure start here
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
modalClose = div.children[0];
// modal structure end here
// Modal function start here
galleryItem.forEach(function (image, idx) {
    image.addEventListener("click", function () {
        let modalImg = document.querySelector(".modal-image");
        let galleryImage = document.querySelectorAll(".gallery-img");
        console.log(galleryImage[idx].src)
        modalImg.src = galleryImage[idx].src;
        modal.classList.add("appear");
        html.classList.add("remove-scroll");
    });
});
modalClose.addEventListener("click", function () {
    modal.classList.remove("appear");
    html.classList.remove("remove-scroll");
});
// Modal function end here
//  event for outside click and escape btn start here

modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.classList.remove("appear");
        html.classList.remove("remove-scroll");
    };
});

window.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        modal.classList.remove("appear");
        html.classList.remove("remove-scroll");
    };
});
//  event for outside click and escape btn start here
