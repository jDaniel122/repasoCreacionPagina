document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show'); // toggle, agrega y quita la clase despues de la accion colocada('click')
}) 
ScrollReveal().reveal('.container');
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});
ScrollReveal().reveal('.red-social',{delay:500});

