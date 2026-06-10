# 🍔 Food Delivery App — Backend

Backend service for a food delivery application. This Express.js server manages shops, products, and orders with filtering, sorting, pagination, and request validation.

---

## 🚀 Features

* Shop catalog with rating filters
* Product listing with shop filtering, category filters, sorting, and pagination
* Order creation with item validation
* Order listing and search by email/phone
* Dedicated GET endpoints for single shops, products, and orders
* Input validation using **Joi + Celebrate**
* Structured error handling and logging with **Pino**

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Celebrate + Joi
* Helmet
* CORS
* Pino HTTP logger

---

## 📁 Project Structure

```bash
src/
  controllers/
  db/
  middleware/
  models/
  routes/
  validations/
  utils/
  server.js
```

---

## 📌 API Endpoints

### 🏪 Shops

```http
GET /delivery-app/shops
```

Query params:

* `page` — page number (default: 1)
* `perPage` — items per page (default: 10, max: 10)
* `minRating` — minimum shop rating (1-5)
* `maxRating` — maximum shop rating (1-5)

```http
GET /delivery-app/shops/:shopId
```

Retrieve a single shop by MongoDB ObjectId.

---

### 🍕 Products

```http
GET /delivery-app/products
```

Query params:

* `page` — page number (default: 1)
* `perPage` — items per page (default: 10, max: 10)
* `shopId` — shop ObjectId filter
* `categories` — comma-separated category list
* `sortBy` — `price` or `name`
* `sortOrder` — `asc` or `desc` (default: `asc`)

Example:

```http
GET /delivery-app/products?shopId=123&categories=Burgers,Drinks&sortBy=price&sortOrder=asc
```

```http
GET /delivery-app/products/:productId
```

Retrieve a single product by MongoDB ObjectId.

---

### 🛒 Orders

```http
POST /delivery-app/orders
```

Request body:

```json
{
  "customerName": "Roman",
  "email": "roman@email.com",
  "phone": "+380679106820",
  "address": "Kyiv, Ukraine",
  "items": [
    {
      "productId": "ID",
      "name": "Burger",
      "price": 120,
      "quantity": 2
    }
  ],
  "totalPrice": 240
}
```

```http
GET /delivery-app/orders
```

Query params:

* `page` — page number (default: 1)
* `perPage` — items per page (default: 10, max: 10)
* `email` — filter orders by customer email
* `phone` — filter orders by customer phone

```http
GET /delivery-app/orders/:orderId
```

Retrieve a single order by MongoDB ObjectId.

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd delivery_app_server
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

---

## ▶️ Run the Server

```bash
npm run dev
```

Server will start on:

```text
http://localhost:3000
```

---

## 🧠 Notes

* Request validation is handled by `celebrate`.
* Invalid ObjectId values return validation errors.
* Phone numbers are normalized during order processing.
* The server uses `helmet` and `cors` for security and cross-origin support.

* Email is stored in lowercase
* All data is fetched from MongoDB (no local JSON storage)
* Backend is designed without admin panel (user-side functionality only)

---

## 📈 Future Improvements

* Authentication (JWT)
* Admin panel (CRUD for products & shops)
* Order status tracking
* Coupons system
* Reorder functionality

---

## 👨‍💻 Author

Roman Hrydin
Junior Fullstack Developer

---

## 📄 License

This project is created for educational purposes.
