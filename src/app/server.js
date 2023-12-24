
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Enable CORS pre-flight
server.options('*', (req, res) => {
  res.sendStatus(200);
});

// Add custom POST endpoint for meetings
server.post('/meetings', (req, res, next) => {
  // Your meeting registration logic here
  res.jsonp({ success: true, data: req.body });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
