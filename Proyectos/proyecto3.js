// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => 
{
    fetch('https://rickandmortyapi.com/api/character')
        
        .then(response => 
        {
            if (!response.ok) 
            {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        
        .then(data => 
        {
            // Completar: renderizar datos en el contenedor
            // Pista: Usa `data.results` para iterar sobre los personajes obtenidos.
            renderCharacters(data.results)
        })

        .catch(error => 
        {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
        });
});

// Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => 
    {
        axios.get('https://rickandmortyapi.com/api/character')
            
            .then(response => 
            {
                const data = response.data;
                // Completar: renderizar datos en el contenedor
                // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.
                renderCharacters(data.results)
            })

            .catch(error => 
            {
                console.error('Error:', error);
                dataContainer.textContent = 'Hubo un error al obtener los datos.';
            });
});

// Ejemplo de función de renderizado:
// Puedes adecuar este código

function renderCharacters(characters) 
{
    dataContainer.innerHTML = '';
    characters.forEach(character => 
    {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
        <h3>Name: ${character.name}</h3>
        <p>Status: ${character.status}</p>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <h4>Origin </h4>
        <p>name: ${character.origin.name}</p>
        <p>url: ${character.origin.url}</p>
        <h4>Location </h4>
        <p>name: ${character.location.name}</p>
        <p>url: ${character.location.url}</p>
        <img src="${character.image}" alt="${character.name}">
        `;
        dataContainer.appendChild(characterElement);
    });
}