// Función para validar el formulario antes de enviarlo
document.getElementById('productForm').addEventListener('submit', function (event) {
    var isValid = true;

    // Validar el nombre del producto con una expresión regular
    var productNameInput = document.getElementById('productName');

    productNameInput.addEventListener('input', function (event) {
        var productName = event.target.value;
        var regex = /^[\w\s\-]+$/; // Permite letras, números, espacios y guiones

        if (!regex.test(productName)) {
            productNameInput.classList.add('is-invalid');
        } else {
            productNameInput.classList.remove('is-invalid');
        }
    });
    // Validar la imagen del producto
    var productImageInput = document.getElementById('productImage');
    if (productImageInput.files.length === 0) {
        productImageInput.classList.add('is-invalid');
        isValid = false;
    } else {
        productImageInput.classList.remove('is-invalid');
    }

    // Validar la categoría
    var categorySelect = document.getElementById('category');
    if (categorySelect.value === '') {
        categorySelect.classList.add('is-invalid');
        isValid = false;
    } else {
        categorySelect.classList.remove('is-invalid');
    }

    var categorySelect = document.getElementById('marca');
    if (categorySelect.value === '') {
        categorySelect.classList.add('is-invalid');
        isValid = false;
    } else {
        categorySelect.classList.remove('is-invalid');
    }

    //  validación para cantidad en stock
    var stockInput = document.getElementById('stock');
    if (!/^[1-9]\d*$/.test(stockInput.value)) {
        stockInput.classList.add('is-invalid');
        isValid = false;
    } else {
        stockInput.classList.remove('is-invalid');
    }

    var priceInput = document.getElementById('price');
    if (!/^\d+(\.\d{1,2})?$/.test(priceInput.value)) {
        priceInput.classList.add('is-invalid');
        isValid = false;
    } else {
        priceInput.classList.remove('is-invalid');
    }

    // Agregar más validaciones para otros campos del formulario si es necesario

    if (!isValid) {
        event.preventDefault(); // Evita que el formulario se envíe si hay campos inválidos
    }
});