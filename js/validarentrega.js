function validarFormulario() {
    var tipoEntrega = document.getElementById("tipo-entrega").value;

    // Verificar si se ha seleccionado un tipo de retiro
    if (tipoEntrega !== "retiro" && tipoEntrega !== "domicilio") {
        alert("Por favor seleccione un tipo de retiro.");
        return;
    }

    // Expresión regular para validar el RUT chileno
    var rutRegex = /^[0-9]+-[0-9kK]$/;
    // Expresión regular para validar el formato del nombre (permitiendo letras acentuadas y espacios)
    var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    // Expresión regular para validar el formato del teléfono (permitiendo números y caracteres especiales como +)
    var telefonoRegex = /^[0-9+\s]+$/;

    var nombre, apellido, rut, telefono, direccion, region, comuna;

    if (tipoEntrega === "retiro") {
        nombre = document.getElementById("nombre-retiro").value;
        rut = document.getElementById("rut-retiro").value;

        if (nombre.trim() === "") {
            alert("Por favor ingrese su nombre.");
            return;
        }

        if (!nombreRegex.test(nombre)) {
            alert("Por favor ingrese un nombre válido.");
            return;
        }

        if (!rutRegex.test(rut)) {
            alert("Por favor ingrese un RUT válido.");
            return;
        }
    } else if (tipoEntrega === "domicilio") {
        nombre = document.getElementById("nombre-domicilio").value;
        apellido = document.getElementById("apellido-domicilio").value;
        rut = document.getElementById("rut-domicilio").value;
        telefono = document.getElementById("telefono-domicilio").value;
        direccion = document.getElementById("direccion-domicilio").value;
        region = document.getElementById("region-domicilio").value;
        comuna = document.getElementById("comuna-domicilio").value;

        if (nombre.trim() === "") {
            alert("Por favor ingrese su nombre.");
            return;
        }

        if (!nombreRegex.test(nombre)) {
            alert("Por favor ingrese un nombre válido.");
            return;
        }

        if (apellido.trim() === "") {
            alert("Por favor ingrese su apellido.");
            return;
        }

        if (!rutRegex.test(rut)) {
            alert("Por favor ingrese un RUT válido.");
            return;
        }

        // Puedes agregar más validaciones aquí según tus necesidades

        if (telefono.trim() === "") {
            alert("Por favor ingrese su teléfono.");
            return;
        }

        if (!telefonoRegex.test(telefono)) {
            alert("Por favor ingrese un teléfono válido.");
            return;
        }

        if (direccion.trim() === "") {
            alert("Por favor ingrese su dirección.");
            return;
        }

        if (region === "") {
            alert("Por favor seleccione una región.");
            return;
        }

        if (comuna === "") {
            alert("Por favor seleccione una comuna.");
            return;
        }
    }

    // Si todo está validado, redireccionar
    window.location.href = "metododepago.html";
}
