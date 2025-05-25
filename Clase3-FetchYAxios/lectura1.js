// Fetch Ejemplo sencillo:

fetch('https://api.weatherapi.com/v1/current.json?key=tuClave&q=Mexico')

.then(response => response.json())
.then(data => console.log('Clima actual:', data))
.catch(error => console.error('Error al obtener el clima:', error));