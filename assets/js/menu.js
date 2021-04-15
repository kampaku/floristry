const menu = () => {
  const button = document.querySelector(".menu-button"),
    navLinks = document.querySelector(".catalog__links"),
    links = document.querySelectorAll(".catalog__links li");
	let menuIsActive = false;

  button.addEventListener("click", () => {
		if (menuIsActive) {
      document.body.style.overflow = 'visible';
      menuIsActive = !menuIsActive;
    } else {
      document.body.style.overflow = 'hidden';
      menuIsActive = !menuIsActive;
    }
    button.classList.toggle("open");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
};

export default menu;
