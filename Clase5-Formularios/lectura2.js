//En JavaScript, se puede verificar si una casilla está marcada usando la propiedad .checked.

const checkbox = document.querySelector('input[type="checkbox"]');
console.log(checkbox.checked); // true o false


// Radio buttons Para obtener el valor seleccionado:
const selectedRadio = document.querySelector('input[name="genero"]:checked');
console.log(selectedRadio.value); // "masculino", "femenino" o "otro"

// Menús Desplegables Para obtener el valor seleccionado:
const ciudad = document.getElementById('ciudad');
console.log(ciudad.value); // Valor de la opción seleccionada


// Campos de Fecha y Hora Los valores pueden capturarse así:
const fecha = document.getElementById('fecha').value;
const hora = document.getElementById('hora').value;
console.log(`Fecha: ${fecha}, Hora: ${hora}`);

// Campos de Archivo Se puede acceder al archivo cargado a través de la propiedad files:
const archivo = document.getElementById('archivo').files[0];
console.log(archivo.name); // Nombre del archivo