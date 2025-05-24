fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(() => 
    {
        console.log("La promesa ya tiene respuesta");
    })