const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const httpMethod = req.method;
  const { query: { schedule, month }, pathname } = url.parse(req.url, true);
  switch(httpMethod) {
    case 'GET':
      if (pathname === '/') {
        return res.end('Página Principal');
      } else if (pathname === '/events') {
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write('Página de Eventos');
        res.write(schedule);
        res.write(month);
        return res.end() 
      } else if (pathname === '/about') {
        return res.end('Página sobre Nosotros');
      } else {
        return res.end('Está página no existe');
      }
      break;
    case 'POST':
      break;
    default:
      return res.end();
  }
});

server.listen('8080', () => {
  console.log('Estoy escuchando en el puerto 8080');
});