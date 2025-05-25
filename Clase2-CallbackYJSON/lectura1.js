//Callback ejemplo sencillo

function saludar(nombre, callback) 
{
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() 
{
    console.log('Adios!');
}

saludar('María', despedirse);

// Ejemplo con setTimeout:

console.log('Inicio');

setTimeout(() => 
{
    console.log('Esto sucede después de 2 segundos');
}, 2000);

console.log('Fin');

// Ejemplo de Callback Hell:

setTimeout(() => 
{
    console.log('Primera tarea completada');
    setTimeout(() => 
    {
        console.log('Segunda tarea completada');
        setTimeout(() => 
        {
            console.log('Tercera tarea completada');
        }, 1000);
    }, 1000);
}, 1000);