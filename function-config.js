const fs = require('fs');

fs.copyFile('src/functions/_routes.json', 'functions/_routes.json', (err) => {
  if (err) throw err;
  console.log('src/functions/_routes.json was copied to functions.');
});