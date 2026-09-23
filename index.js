document.querySelector(".bars__menu").addEventListener("click", animateBars);

const line1__bars = document.querySelector(".line1__bars_menu");
const line2__bars = document.querySelector(".line2__bars_menu");
const line3__bars = document.querySelector(".line3__bars_menu");
const container_menu = document.querySelector(".mobile-menu");
const menuIcono = document.querySelector('.bars__menu');
const container_samsungLg = document.querySelector(".samsung-lg");
const menuMarcas = document.querySelector('.marcas');
const menuMarcas2 = document.querySelector('.marcas2');

menuIcono.addEventListener('click', toggleMobileMenu);
menuMarcas.addEventListener('click', toggleSamsungLg);
menuMarcas2.addEventListener('click', toggleSamsungLg);
function animateBars() {
    line1__bars.classList.toggle("activeline1__bars_menu");
    line2__bars.classList.toggle("activeline2__bars_menu");
    line3__bars.classList.toggle("activeline3__bars_menu");
     
} 
 function toggleMobileMenu(){
   container_menu.classList.toggle('inactive');
   
 }

// scroll//

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) 
  { 
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
  
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);


    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
 function toggleSamsungLg(){
  container_samsungLg.classList.toggle('inactive-2');
}

