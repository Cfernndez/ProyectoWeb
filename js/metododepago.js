
    document.getElementById('payment-form').addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Regular expressions for validation
        const cardNameRegex = /^[a-zA-Z ]+$/;
        const cardNumberRegex = /^[0-9]{16}$/;
        const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cvvRegex = /^[0-9]{3}$/;

        // Get form inputs
        const cardName = document.getElementById('card-name').value.trim();
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiry = document.getElementById('expiry').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        // Validation
        if (!cardNameRegex.test(cardName)) {
            alert('Por favor, introduce un nombre de tarjeta válido.');
            return;
        }
        if (!cardNumberRegex.test(cardNumber)) {
            alert('Por favor, introduce un número de tarjeta válido.');
            return;
        }
        if (!expiryRegex.test(expiry)) {
            alert('Por favor, introduce una fecha de vencimiento válida (MM/YY).');
            return;
        }
        if (!cvvRegex.test(cvv)) {
            alert('Por favor, introduce un CVV válido.');
            return;
        }

        // If all fields are valid, redirect the page
        window.location.href = 'pagorealizado.html';
    });
