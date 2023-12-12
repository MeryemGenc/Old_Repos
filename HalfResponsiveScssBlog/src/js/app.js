//RESPONSIVE NAVBAR
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-li');

    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade ease-in forwards ${index / 7+0.6}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();
