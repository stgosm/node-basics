const axios = require('axios');

axios.get('https://swapi.dev/api/people')
  .then(response => {
    const personajes = response.data.results;
    const males = personajes.filter(personaje => personaje.gender === 'male');
    const females = personajes.filter(personaje => personaje.gender === 'female');
    // Generate female.json y male.json
    // Crear el archivo
  });