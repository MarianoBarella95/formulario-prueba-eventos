const nombre = document.getElementById('nombre');
const mail = document.getElementById('mail');
const contraseña = document.getElementById('contra');
const reset = document.getElementById('reset');
const casilleros = document.querySelectorAll('.input')
const oculto = document.getElementById('oculto');
const ocultoDos = document.getElementById('oculto-2')


function limpiarInput () {
    nombre.value = '';
    nombre.style.backgroundColor = 'white'
    mail.value = '@gmail.com';
    contraseña.value = '';
    contraseña.style.backgroundColor = 'white'
    oculto.style.display = 'none'
    ocultoDos.style.display = 'none';
}

reset.addEventListener('click', limpiarInput);

function focusNombreColor () {
    if (nombre.value.length < 8) {
        nombre.style.backgroundColor = '#e63946';
        oculto.style.display = 'flex'
    } else if (nombre.value.length >= 8) {
        nombre.style.backgroundColor = '#588157';
        oculto.style.display = 'none'
    }
}

nombre.addEventListener('input', focusNombreColor);

function focusContraseñaColor () {
    if (/\d/.test(contraseña.value)) {
        contraseña.style.backgroundColor = '#588157';
        ocultoDos.style.display = 'none';       
    } else  {
        contraseña.style.backgroundColor = '#e63946';
        ocultoDos.style.display = 'flex';
    }
}

contraseña.addEventListener('input', focusContraseñaColor);

