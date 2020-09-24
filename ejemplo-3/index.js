const path = require('path');
const fs = require('fs');

console.log(__dirname);
console.log(path.join(__dirname, './index.html'));

// Using callback
fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
  if (err) throw err;
  console.log(data);
})

// Without callback
const data = fs.readFileSync(path.join(__dirname, './data.json'));
console.log(JSON.parse(data));