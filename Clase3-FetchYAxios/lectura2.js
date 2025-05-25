// AXIOS Ejemplo sencillo:

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });


// Solicitud GET:

axios.get('https://api.example.com/users')

    .then(response => console.log(response.data))

    .catch(error => console.error(error));


// Solicitud POST:

axios.post('https://api.example.com/users', 
{
    name: 'John Doe',
    email: 'john.doe@example.com'
})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));


// Ejemplo de manejo de errores:

axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => 
    {
        if (error.response) 
        {
            console.error('Error del servidor:', error.response.status);
        } 
        else if 
        (error.request) 
        {
            console.error('No hubo respuesta del servidor:', error.request);
        } 
        else 
        {
            console.error('Error al configurar la solicitud:', error.message);
        }
    });