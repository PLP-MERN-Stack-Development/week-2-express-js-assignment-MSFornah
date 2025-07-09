const { NotFoundError, ValidationError } = require('../utils/errors');

const validateProduct = require('../middleware/validateProduct');

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


// In-memory products data
let products = [
  {
    id: '1',
    name: 'Product One',
    description: 'First product',
    price: 10,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Product Two',
    description: 'Second product',
    price: 20,
    category: 'Books',
    inStock: false
  },
  {
    id: '3',
    name: 'Product Three',
    description: 'Third product',
    price: 30,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '4',
    name: 'Product Four',
    description: 'Fourth product',
    price: 40,
    category: 'Clothing',
    inStock: true
  },
  {
    id: '5',
    name: 'Product Five',
    description: 'Fifth product',
    price: 50,
    category: 'Books',
    inStock: false
  },
  {
    id: '6',
    name: 'Product Six',
    description: 'Sixth product',
    price: 60,
    category: 'Clothing',
    inStock: true
  }
];



// GET /api/products: List all products
router.get('/', (req, res) => {
  const { category, search, page = 1, limit = 5 } = req.query;

  let filteredProducts = products;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Search by name
  if (search) {
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.json(paginatedProducts);
});



// GET /api/products/:id: Get a specific product by ID
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  // if (!product) {
  //   return res.status(404).json({ message: 'Product not found' });
  // }

  if (!product) {
  // If product is not found, throw custom NotFoundError
  return next(new NotFoundError('Product not found'));
}
  res.json(product);
});

// POST /api/products: Create a new product
router.post('/', validateProduct, (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id: Update an existing product
router.put('/:id', validateProduct, (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const { name, description, price, category, inStock } = req.body;
  product.name = name;
  product.description = description;
  product.price = price;
  product.category = category;
  product.inStock = inStock;
  res.json(product);
});

// DELETE /api/products/:id: Delete a product
router.delete('/:id', (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: 'Product deleted' });
});

// Route for getting product statistics
router.get('/stats/category-count', (req, res) => {
  const categoryCounts = {};

  products.forEach(p => {
    if (categoryCounts[p.category]) {
      categoryCounts[p.category]++;
    } else {
      categoryCounts[p.category] = 1;
    }
  });

  res.json(categoryCounts);
});


module.exports = router;
