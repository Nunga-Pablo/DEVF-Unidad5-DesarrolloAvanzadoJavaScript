// Ejemplo de conversión JSON a JS

const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';
const objeto = JSON.parse(jsonData);
console.log(objeto.nombre); // "Carlos"
console.log(objeto.edad);   // 25


// Ejemplo de conversión JS a JSON:

const estudiante = 
{
    nombre: "Ana",
    edad: 22,
    esEstudiante: true,
    materias: ["Historia", "Inglés", "Literatura"]
};

const jsonString = JSON.stringify(estudiante);
console.log(jsonString);

// En este caso, JSON.stringify() convierte el objeto estudiante en una cadena JSON 
// que podemos enviar a un servidor o guardar en un archivo.


// Convertir un arreglo JSON a objeto en JavaScript:

const jsonInfo = '{"estudiantes":[{"nombre":"Carlos","edad":25},{"nombre":"Ana","edad":22},{"nombre":"Luis","edad":23}]}';

const data = JSON.parse(jsonInfo);
console.log(data.estudiantes[0].nombre);  // "Carlos"
console.log(data.estudiantes[1].edad);    // 22