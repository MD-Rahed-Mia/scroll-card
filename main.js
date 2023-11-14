
let card = document.querySelectorAll(".card");
let sliderBtn = document.querySelectorAll(".slider_btn button");
let container = document.querySelector(".container");

sliderBtn.forEach(function (target) {
  target.addEventListener("click", function () {
    if (target.id == "next") {
      container.scrollLeft += '200';
    }if (target.id == "previous") {
      container.scrollLeft -= '200';
    }
  })
})

let isDragging = false, startX, scrollLeft;

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollLeft = container.scrollLeft;
  container.classList.add("dragging");
}

const dragging = (e) => {
  if (!isDragging) {
    return;
  }
  container.scrollLeft = scrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
}

container.addEventListener("mousedown", dragStart);
container.addEventListener("mousemove", dragging);
container.addEventListener("mouseup", dragStop);