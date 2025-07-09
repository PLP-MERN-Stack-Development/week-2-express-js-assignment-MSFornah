<<<<<<< HEAD
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
=======
// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 
>>>>>>> b001a1817d33669b298781698623eca4302537a4
