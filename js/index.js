let linkedin = document.getElementById('linkedin');
let github = document.getElementById('github');

let index = document.getElementById('index').id;
let acerca = document.getElementById('acerca').id;
let proyectos = document.getElementById('proyectos').id;
let contactos = document.getElementById('contactos').id;

/**
 * Redireccionaremos a linkedin
 * @param {*} e 
 */
linkedin.onclick = function (e) {
    e.preventDefault();
    window.location.href = 'https://www.linkedin.com/in/miguel-jer%C3%B3nimo-9877a9153/';
}
/**
 * Redireccionaremos a github
 * @param {*} e 
 */
github.onclick = function (e) {
    e.preventDefault();
    window.location.href = 'https://github.com/MiguelJeronimo';
}

/**
 * Navegar por vinculos
 */

window.onload = function () {
    let menus = document.querySelectorAll('.menus');
    for (let i = 0; i < menus.length; i++) {
        let ids = menus[i].id;
        menus[i].addEventListener('click', function(e) {
           e.preventDefault();
            console.log(ids);
            moverAUnaSeccion(ids)
        })
        
   }
}


/**
 * Este metodo recibe el id de los vinculos del menu de la web, asi que lo que hara es
 * redirigir a una sección del sitio web
 * @param {*} idElemento 
 */
function moverAUnaSeccion(idElemento) {
    switch (idElemento) {
        case 'index':
            window.location.href = '#inicio';
            break;
        case 'acerca':
            window.location.href = '#about';
            break;
        case 'proyectos':
            window.location.href = '#proyecto';
            break;
        case 'contactos':
            window.location.href = '#contacto';
            break;
    }
}