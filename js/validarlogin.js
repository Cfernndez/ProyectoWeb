function validarFormulario() {
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password1').value;

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Expresión regular para validar la contraseña (al menos 8 caracteres, al menos una letra mayúscula y un número)
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Ingrese una dirección de correo electrónico válida.');
      return false;
    }

    if (!passwordRegex.test(password)) {
      alert('La contraseña debe contener al menos 8 caracteres, una letra mayúscula y un número.');
      return false;
    }

    return true;
  }


  function validarclave() {
    var email = document.getElementById('mail').value;
    
    // Expresión regular para validar el formato del correo electrónico
    var emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert('Ingrese una dirección de correo electrónico válida.');
      return false;
    }

    return true;
  }