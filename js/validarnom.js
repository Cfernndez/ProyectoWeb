
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
    if (!validarRut(document.getElementById('rut').value)) {
        alert('Por favor, ingrese un Rut válido.');
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
        alert('Las contraseñas no coinciden debe contener al menos 8 caracteres, una letra mayúscula y un número.');
        return false;
    }

    return true;
}

function validarNombreApellido(nombreApellido) {
    // Expresión regular para validar nombre y apellido con un mínimo de 3 caracteres
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']{3,}$/;
    return regex.test(nombreApellido);
}

function validarEmail(email) {
    // Expresión regular para validar correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

function validarRut(rut) {
    // Expresión regular para validar Rut chileno
    const regex = /^(\d{1,2}(\.?\d{3}){1,2}-[\dkK])$/;
    if (!regex.test(rut)) return false;

    // Separar el Rut de su dígito verificador
    const parts = rut.split('-');
    let num = parts[0].split('.').join('');
    const dv = parts[1].toUpperCase();

    // Verificar que el dígito verificador coincida
    let suma = 0;
    let multiplo = 2;
    for (let i = 1; i <= num.length; i++) {
        const index = multiplo * parseInt(num.charAt(num.length - i));
        suma += index;
        if (multiplo < 7) multiplo += 1;
        else multiplo = 2;
    }

    const dvEsperado = 11 - (suma % 11);
    const dverificador = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

    return dv === dverificador;
}
