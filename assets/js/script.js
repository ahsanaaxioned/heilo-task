// global variable declaration start here
const galleryItem = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const overFlow =document.querySelector("html");
// global variable declaration start here
// Modal function start here
galleryItem.forEach(function(image,idx){
    image.addEventListener("click", function(){
        let modalImg = document.querySelector(".modal-image");
        let galleryImage = document.querySelectorAll(".gallery-img");
        console.log(galleryImage[idx].src)
        modalImg.src = galleryImage[idx].src;
        modal.classList.add("appear");
        overFlow.classList.add("remove-scroll");
    });
    modalClose.addEventListener("click",function(){
        modal.classList.remove("appear");
        overFlow.classList.remove("remove-scroll");
    });
});
// Modal function end here
//  event for outside click and escape btn start here

modal.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.classList.remove("appear");
        overFlow.classList.remove("remove-scroll");
    };
  });

window.addEventListener("keydown", function(e) {
    if (e.key == "Escape") {
        modal.classList.remove("appear");
        overFlow.classList.remove("remove-scroll");
    };
  });
//  event for outside click and escape btn start here
