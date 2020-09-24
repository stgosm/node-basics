const fs = require('fs');
const path = require('path');

// Crear un archivo usando file-system
// fs.writeFile(path.join(__dirname, 'ejemplo.txt'), 'Este el contenido del archivo', { encoding: 'utf-8' }, (err) => {
//   if (err) throw err;
//   console.log('El archivo ha sido creado');
// });

// Actualizando un archivo con appendFile
fs.appendFile(path.join(__dirname, 'ejemplo.txt'), '\nEsto es una nueva línea dentro del archivo', { encoding: 'utf-8' }, (err) => {
  if (err) throw err;
  console.log('Archivo actualizado');
});