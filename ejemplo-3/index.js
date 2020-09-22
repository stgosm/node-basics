const fs = require('fs');

// Using callback
fs.readFile('./index.html', (err, data) => {
  if (err) throw err;
  console.log(data);
})

// Without callback
const data = fs.readFileSync('./data.json');
console.log(JSON.parse(data));