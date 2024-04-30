
function validarForm() {
    // Validar cada campo del formulario
    if (!validarNombreApellido(document.getElementById('nombre').value)) {
        alert('Por favor, ingrese un nombre válido.');
        return false;
    }
    if (!validarNombreApellido(document.getElementById('apellidos').value)) {
        alert('Por favor, ingrese un apellido válido.');
        return false;
    }

    if (!validarEmail(document.getElementById('mail').value)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    if (document.getElementById('region').value === '') {
        alert('Por favor, seleccione una región.');
        return false;
    }
    if (document.getElementById('comuna').value === '') {
        alert('Por favor, seleccione una comuna.');
        return false;
    }
    if (!validarDireccion(document.getElementById('address').value)) {
        alert('Por favor, ingrese una dirección válida.');
        return false;
    }
    if (!validarContraseña()) {
       
        alert('Las contraseñas no coinciden o no cumplen los requisitos.');
        return false;
    }
    return true;
}

function validarNombreApellido(nombreApellido) {
    // Expresión regular para validar nombre y apellido
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/;
    return regex.test(nombreApellido);
}



function validarEmail(email) {
    // Expresión regular para validar correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarDireccion(direccion) {
    // Expresión regular para validar dirección
    // Puedes personalizar esta expresión según tus necesidades específicas
    const regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return regex.test(direccion);
}

function validarContraseña() {
    // Validar que las contraseñas coincidan y cumplan con ciertos requisitos
    const pass1 = document.getElementById('password1').value;
    const pass2 = document.getElementById('password2').value;
    // Expresión regular para validar que la contraseña tenga al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pass1 === pass2 && regex.test(pass1);
}


// Evitar el envío del formulario si las contraseñas no coinciden
document.querySelector("form").addEventListener("submit", function (event) {
    if (!validarForm()) {
        event.preventDefault();
    }
});

