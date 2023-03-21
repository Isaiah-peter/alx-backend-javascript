const http = require('http');

const app = http.createServer();
const PORT = 1245;

app.on('request', (_, res) => {
  const ouput = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', ouput.length);
  res.statue = 200;

  res.write(Buffer.from(ouput));
});

app.listen(PORT, 'localhost', () => {
  console.log(`server running on localhost:${PORT}`);
});
