const resolveAfter = () => 
{
    return new Promise((resolve, reject) => 
    {
        let valor = false;
        setTimeout(() => 
        {
            return (valor) ? resolve("Resuelto") : reject("Rechazado"); //operador terniario, similar al if
        }, 2000)
    })
}

const asyncCall = async () => 
{
    console.log("Llamando a la funcion");
    const result = await resolveAfter();
    console.log(result);
}

asyncCall();