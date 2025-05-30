document.getElementById('registroEvento').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const archivo = document.getElementById('archivo').files[0];;
    const ciudad = document.getElementById('ciudad').value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !ciudad) 
    {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    //Si el correo no es valido
    if (!correo.includes('@')) 
    {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    //Si el telefono no es de 10 digitos
    if (!/^\d{10}$/.test(telefono)) 
    {
        alert('El telefono debe contener 10 caracteres');
        return;
    }

    //Si el archivo subido no es de tipo .pdf
    if (archivo && !archivo.name.toLowerCase().endsWith('.pdf')) 
    {
        alert('Por favor, sube un archivo de extension .pdf');
        return;
    }

    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});