const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'contactos.txt');

const crearArchivo = () => {
  fs.writeFile(fileName, '', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
  })
}

const crearContacto = () => {
  const nombre = process.argv[2];
  const telefono = process.argv[3];
  const edad = process.argv[4];

  fs.appendFileSync(fileName, `${nombre} ${telefono} ${edad}\n`, { encoding: 'utf-8' });
}

const mostrarContactos = () => {
  const data = fs.readFileSync(fileName, 'utf-8');
  const lineas = data.split(/\n/);
  let sumaDeEdades = 0;
  let totalDeRegistros = 0;
  lineas.forEach((linea) => {
    if (linea.length > 0)  {
      const info = linea.split(' ');
      console.log(`\nNombre: ${info[0]}\nTelefono: ${info[1]}\nEdad: ${info[2]} años`)
      sumaDeEdades += parseInt(info[2]); // sumaDeEdades = sumaDeEdades + info[2];
      totalDeRegistros += 1;
    }
  });

  // console.log(sumaDeEdades);
  // console.log(totalDeRegistros);

  const media = sumaDeEdades / totalDeRegistros;
  console.log(`\nMedia aritmetica: ${media} años`);
}

fs.stat(fileName, (err, stats) => {
  if (err) {
    crearArchivo()
  } else {
    console.log('El archivo ya existe');
  };

  crearContacto();
  mostrarContactos();
});