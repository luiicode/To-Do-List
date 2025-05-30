'use strict'

// FUNCION DEL BOTON HOME - LOCALSTORAGE

const btnHome = document.querySelector('.btn-home');
const home = document.querySelector('.home');
const onlyHome = document.querySelectorAll('.tarea,.pendiente,.estadistica,.calendario');

if (btnHome) { // AQUI REALIZAMOS LA FUNCION DEL BOTON HOME PARA QUE DESAPARESCA TODAS LAS SECCIONES MENO LA SECCION HOME
    btnHome.addEventListener('click',
        function () {
            onlyHome.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (home) {
                home.style.display = '';
            }
            localStorage.setItem('Section','home'); // REGISTRAMOS LA ACCION DEL BOTON EN EL STORAGE
        }
    );
}
// FIN DE LA FUNCION DEL BOTON HOME

// INICIO DE LA FUNCION DEL BOTON TAREAS

const btnTarea = document.querySelector('.btn-tarea');
const tarea = document.querySelector('.tarea');
const onlyTarea = document.querySelectorAll('.home,.pendiente,.estadistica,.calendario');

if (btnTarea) { 
    btnTarea.addEventListener('click',
        function () {
            onlyTarea.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (tarea) {
                tarea.style.display = '';
            }
            localStorage.setItem('Section','tarea'); 
        }
    );
}
// FIN DE LA FUNCION DEL BOTON TAREAS

// INICIO DE LA FUNCION DEL BOTON PENDIENTES

const btnPendiente = document.querySelector('.btn-pendiente');
const pendiente = document.querySelector('.pendiente');
const onlyPendiente = document.querySelectorAll('.home,.tarea,.estadistica,.calendario');

if (btnPendiente) { 
    btnPendiente.addEventListener('click',
        function () {
            onlyPendiente.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (pendiente) {
                pendiente.style.display = '';
            }
            localStorage.setItem('Section','pendiente'); 
        }
    );
}
// FIN DE LA FUNCION DEL BOTON PENDIENTES

// INICIO DE LA FUNCION DEL BOTON ESTADISTICAS

const btnEstadistica = document.querySelector('.btn-estadistica');
const estadistica = document.querySelector('.estadistica');
const onlyEstadistica = document.querySelectorAll('.home,.tarea,.pendiente,.calendario');

if (btnEstadistica) { 
    btnEstadistica.addEventListener('click',
        function () {
            onlyEstadistica.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (estadistica) {
                estadistica.style.display = '';
            }
            localStorage.setItem('Section','estadistica'); 
        }
    );
}
// FIN DE LA FUNCION DEL BOTON ESTADISTICAS

// INICIO DE LA FUNCION DEL BOTON CALENDARIO

const btnCalendario = document.querySelector('.btn-calendario');
const calendario = document.querySelector('.calendario');
const onlyCalendario = document.querySelectorAll('.home,.tarea,.pendiente,.estadistica');

if (btnCalendario) { 
    btnCalendario.addEventListener('click',
        function () {
            onlyCalendario.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (calendario) {
                calendario.style.display = '';
            }
            localStorage.setItem('Section','calendario'); 
        }
    );
}
// FIN DE LA FUNCION DEL BOTON CALENDARIO




// FUNCION STORAGE DE LAS SECCIONES: AQUI LO QUE HACES ES HACER QUE CUANDO SE CIERRE LA PAGINA O SE RECARGUE ACTIVE LOS CAMBIOS DEPENDIENDO DE LAS SECCION GUARDADA EN EL STORAGE

document.addEventListener('DOMContentLoaded',
    function () {
        const LastSection = localStorage.getItem('Section');
        if (LastSection === 'home') {
            onlyHome.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (home) {
                home.style.display = '';
            }
        } else 
        if (LastSection === 'tarea') {
            onlyTarea.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (tarea) {
                tarea.style.display = '';
            }
        } else 
        if (LastSection === 'pendiente') {
            onlyPendiente.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (pendiente) {
                pendiente.style.display = '';
            }
        } else
        if (LastSection === 'estadistica') {
            onlyEstadistica.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (estadistica) {
                estadistica.style.display = '';
            }
        } else 
        if (LastSection === 'calendario') {
            onlyCalendario.forEach(
                cambio => {
                    cambio.style.display = 'none';
                }
            );
            if (calendario) {
                calendario.style.display = '';
            }
            localStorage.setItem('Section','calendario');
        }
    }
);
