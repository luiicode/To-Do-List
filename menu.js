'use strict'

const slidebar = document.querySelector('.btn-slidebar');
const width = document.querySelector('.slidebar');
const remove = document.querySelectorAll('.btn-home span, .btn-tarea span, .btn-pendiente span, .btn-estadistica span, .btn-calendario span, .redes-sociales, .instagram span, .tik-tok span, .youtube span');
const main = document.querySelector('.contenido');
const footer = document.querySelector('.creditos');
const btn1 = document.querySelectorAll('.btn-herramientas-tarea,.btn-herramientas-pendiente');
const btn2 = document.querySelectorAll('.btn-cancelar-tarea,.btn-cancelar-pendiente');

let openMenu = true;

/* 
width - width a 100px
slidebar - marginLeft a 18px
main - marginLeft a 110px
*/

if (slidebar) {
    slidebar.addEventListener('click',
        function() {
            if (openMenu) {
                remove.forEach(
                    eliminar => {
                        eliminar.style.display = 'none';
                    }
                );
                if (width) {
                    width.style.width = '100px';
                }
                if (main) {
                    main.style.marginLeft = '110px';
                }
                if (slidebar) {
                    slidebar.style.marginLeft = '18px';
                }
                if (footer) {
                    footer.style.marginLeft = '110px';
                }
                btn1.forEach(
                    change => {
                        change.style.marginLeft = '1150px';
                    }
                );
                btn2.forEach(
                    change => {
                        change.style.marginLeft = '1000px';
                    }
                );

                localStorage.setItem('menu','close');

            } 
            else {
                remove.forEach(
                    eliminar => {
                        eliminar.style.display = '';
                    }
                );
                if (width) {
                    width.style.width = '';
                }
                if (main) {
                    main.style.marginLeft = '';
                }
                if (slidebar) {
                    slidebar.style.marginLeft = '';
                }
                if (footer) {
                    footer.style.marginLeft = '';
                }
                btn1.forEach(
                    change => {
                        change.style.marginLeft = '';
                    }
                );
                btn2.forEach(
                    change => {
                        change.style.marginLeft = '';
                    }
                );

                localStorage.setItem('menu','open');

            }

            openMenu = !openMenu;
        }
    );
}

document.addEventListener('DOMContentLoaded',
    function() {
        const LastSection = localStorage.getItem('menu');
        if (LastSection === 'close') {
            remove.forEach(
                eliminar => {
                    eliminar.style.display = 'none';
                }
            );
            if (width) {
                width.style.width = '100px';
            }
            if (main) {
                main.style.marginLeft = '110px';
            }
            if (slidebar) {
                slidebar.style.marginLeft = '18px';
            }
            if (footer) {
                footer.style.marginLeft = '110px';
            }
            btn1.forEach(
                change => {
                    change.style.marginLeft = '1150px';
                }
            );
            btn2.forEach(
                change => {
                    change.style.marginLeft = '1000px';
                }
            );
        } else
        if (LastSection === 'open') {
            remove.forEach(
                eliminar => {
                    eliminar.style.display = '';
                }
            );
            if (width) {
                width.style.width = '';
            }
            if (main) {
                main.style.marginLeft = '';
            }
            if (slidebar) {
                slidebar.style.marginLeft = '';
            }
            if (footer) {
                footer.style.marginLeft = '';
            }
            btn1.forEach(
                change => {
                    change.style.marginLeft = '';
                }
            );
            btn2.forEach(
                change => {
                    change.style.marginLeft = '';
                }
            );
        }
    }
);
