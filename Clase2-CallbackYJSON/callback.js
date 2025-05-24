function saludar(nombre) 
{
    alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) 
{
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}

procesarEntradaUsuario(saludar);


let value = 1;

function changeValue (callback)
{
    setTimeout(() => 
    {
        value = 2;
    }, 1000)
}

changeValue(value);

setTimeout(() => 
{
    console.log(value);
}, 2000);