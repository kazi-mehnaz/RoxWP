// Testimonial Slider 
var swiper = new Swiper(".testimonial-slider-active", {
    autoplay: true,
	speed: 900,
    slidesPerView: 3,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
});