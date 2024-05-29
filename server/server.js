// Import modules
// const hbs = require('hbs'); 
const express = require('express');
const app = express();

// Define port routing
const PORT = 5000;

app.use( express.json() );
// app.set('view engine', 'handlebars')

// Mount all routes
const router = require('./routes/indexRoutes')
app.use('/api', router);

// Configure template directory
// const viewsPath = path.join(__dirname, 'views')
// app.set('views', viewsPath);

app.listen(
   PORT,
   () => console.log(`Live Server at http://localhost:${PORT}/`)
);