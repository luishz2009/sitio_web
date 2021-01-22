//VARIABLES
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado=true;


function menus(){
    let desplazamiento_actual=window.pageYOffset;
    
    if (desplazamiento_actual<=300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition='1s';      /* Efecto de transición de 1 segundo cuando lo desplazamos */
        menu.style.top='80px';          /* Para que el menú maneje una altura de 80px hacia abajo */
        abrir.style.color='#fff';       /* El ícono se pone blanco */

    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition='1s';
        menu.style.top='100px';          /* Para que el menú maneje una altura de 100px hacia arriba */
        abrir.style.color='#000';        /* El ícono se pone negro */
    }
}
function apertura(){
    if (cerrado) {
        menu.style.width='70vw';
        cerrado=false;
        
    } else {
        menu.style.width='0%';
        menu.style.overflow='hidden';
        cerrado=true;
        
    }
}
window.addEventListener('load',function(){
    /* Aplicamos jquery para desaparecer el Preloader */
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    // Fin Preloader
    menus();
});
window.addEventListener('click',function(e){
    console.log(e.target);
    if (cerrado==false) {
        let span=document.querySelector('span');
        if (e.target !==span && e.target !== abrir) {
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }
    }
})

window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    
    menus();
});
window.addEventListener('resize',function(){
    if(screen.width>=700){
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click',function(){
    apertura();
});