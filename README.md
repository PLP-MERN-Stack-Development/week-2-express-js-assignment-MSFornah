
# Express CRUD API

This is a RESTful API built using Express.js to manage products with full CRUD operations, middleware, error handling, and advanced features.

## 🚀 How to Run

1. Clone the repository
2. Install dependencies:

```

npm install

```

3. Start the server:

```

node server.js

```

Server runs on **http://localhost:3000**

---

## 📂 API Endpoints

### GET /api/products
- List all products
- Supports **filtering** by category (`?category=Electronics`)
- Supports **search** by name (`?search=Product`)
- Supports **pagination** (`?page=1&limit=2`)

### GET /api/products/:id
- Get a specific product by ID

### POST /api/products
- Create a new product
- Requires **API Key** in headers: `x-api-key: mysecretkey`

### PUT /api/products/:id
- Update an existing product
- Requires **API Key** in headers: `x-api-key: mysecretkey`

### DELETE /api/products/:id
- Delete a product

### GET /api/products/stats/category-count
- Get product counts by category

---

## 🛡️ Authentication

- **API Key required** for POST and PUT requests:
  - Header key: `x-api-key`
  - Value: `mysecretkey`

---

## 📝 Examples

### Create Product

**POST /api/products**

Header:
```

x-api-key: mysecretkey
Content-Type: application/json

````

Body:
```json
{
  "name": "New Product",
  "description": "Example description",
  "price": 99,
  "category": "Electronics",
  "inStock": true
}
````

---

### .env.example

```
API_KEY=mysecretkey
PORT=3000
```

Replace with actual environment variables in production.

---

## 👨‍💻 Author

MOHAMED SHUAIB FORNAH – MERN Stack Student

```

---

✅ **Step 3. Save README.md**

---

### 🎯 **2. Create `.env.example`**

✔️ In your project root, create:

📁 **express-crud-api/**  
└── **.env.example**

Content:

```

API\_KEY=mysecretkey
PORT=3000

````

