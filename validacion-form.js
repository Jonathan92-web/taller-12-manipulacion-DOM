const formulario = document.getElementById('myForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Validación del nombre
    if (nombreInput.value.trim() === '') {
        errorNombre.textContent = 'Por favor, ingresa tu nombre.';
        nombreInput.classList.add('error');
    } else {
        errorNombre.textContent = '';
        nombreInput.classList.remove('error');
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorEmail.textContent = 'Por favor, ingresa un email válido.';
        emailInput.classList.add('error');
    } else {
        errorEmail.textContent = '';
        emailInput.classList.remove('error');
    }

    // Si todos los campos son válidos, puedes enviar el formulario
    if (nombreInput.value.trim() !== '' && emailRegex.test(emailInput.value)) {
        // Aquí puedes agregar el código para enviar los datos del formulario
        console.log('Formulario enviado correctamente');
    }
});
