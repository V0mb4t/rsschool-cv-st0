
$( document ).ready(function() {

    $('.main-slider').slick();

    let brgBtn = document.querySelector('.burger-icon')
    let mobileMenu = document.querySelector('.navigation__list')


    brgBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('navigation__list--active')
        brgBtn.classList.toggle('burger-icon--close')
    });


})



