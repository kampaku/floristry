const slider = document.querySelector(".services__wrapper");
let servicesSlider;

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile === "false") {
    servicesSlider = new Swiper(".services__wrapper", {
      slidesPerView: 1,
      spaceBetween: 28,
      slideClass: "services__item",
      wrapperClass: "services",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-container-initialized")) {
      servicesSlider.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

export default mobileSlider;
