const axios = require('axios');
const fs = require('fs');
const path = require('path');

axios.get('https://swapi.dev/api/people')
  .then(response => {
    const personajes = response.data.results;
    const males = personajes.filter(personaje => personaje.gender === 'male');
    const females = personajes.filter(personaje => personaje.gender === 'female');
    // Generate female.json y male.json
    // Crear el archivo

    const fileFemale = path.join(__dirname, 'female.json');
    const fileMale = path.join(__dirname, 'male.json');

    const crearArchivo = (pathName) => {
      fs.writeFile(pathName, '', (err) => {
          // if (err) throw err;
          console.log('El archivo ha sido creado');
      });
    }

    const crearPersonaje = (pathName, personajes) => {
        fs.appendFileSync(pathName, `${personajes}`, { encoding: 'utf-8' });
    }

    const verificarArchivo = (pathName, data) => {
        fs.stat(pathName, (err, stats) => {
            if (err) {
                crearArchivo(pathName);
            } else {
              console.log('El archivo ya existe');
            };
    
            crearPersonaje(pathName, JSON.stringify(data));
        });
    }    

    verificarArchivo(fileFemale, females);
    verificarArchivo(fileMale, males);

  });