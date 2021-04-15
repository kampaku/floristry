import menu from "./menu.js";
import mobileSlider from "./slider.js";


window.addEventListener('DOMContentLoaded', () => {
    menu();
    mobileSlider();
    window.addEventListener('resize', () => {
        mobileSlider();
    });


});
