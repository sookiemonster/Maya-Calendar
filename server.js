const express = require('express');
const app = express();
const PORT = 5000;

app.use( express.json() );

const router = require('./routes/indexRoutes')
app.use(router);

app.listen(
   PORT,
   () => console.log(`Live Server at http://localhost:${PORT}/`)
);