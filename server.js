const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');


const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.json());
app.use(logger);

//Protecting these routes with authentication middleware
app.use('/api/products', auth, productsRoutes);

// Catch-all for unhandled routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


// const logger = require('./middleware/logger');


// app.use(logger);


//Routes definitions
// const productsRoutes = require('./routes/products');

app.use(bodyParser.json());

// Hello World route
app.get('/', (req, res) => {
  res.send('Hello World!, I am Mohamed Shuaib Fornah, I am learn MERN Stack.');
});

// Use products routes
//app.use('/api/products', productsRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log full error stack in terminal for debugging

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});
