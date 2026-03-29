# 🍔 Food Delivery App — Backend

Backend part of a full-stack Food Delivery web application built as a test task.

This server provides API endpoints for managing shops, products, and orders, including filtering, sorting, and pagination.

---

## 🚀 Features

### ✅ Core Functionality

* Get list of shops
* Get products by shop
* Create new order
* Get orders (with filtering)

### 🔍 Filtering

* Products by category
* Shops by rating range
* Orders by email and phone

### ↕️ Sorting

* Products by price (ASC / DESC)
* Products by name (A → Z)

### 📄 Pagination

* Implemented for:

  * products
  * shops
  * orders

### 🛡 Validation

* Request validation using **Joi + Celebrate**
* ObjectId validation
* Form validation for order creation

### ⚡ Performance

* MongoDB indexes for:

  * products (shopId, category, sorting)
  * shops (rating)
  * orders (email, phone)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (MongoDB Atlas)
* Mongoose
* Joi / Celebrate
* Pino (logger)
* CORS
* Helmet

---

## 📁 Project Structure

```bash
src/
  controllers/
  models/
  routes/
  middlewares/
  db/
  validation/
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

* `page`
* `perPage`
* `minRating`
* `maxRating`

---

### 🍕 Products

```http
GET /delivery-app/products
```

Query params:

* `page`
* `perPage`
* `shopId`
* `categories` (comma-separated)
* `sortBy` → `price | name`
* `sortOrder` → `asc | desc`

Example:

```http
/products?shopId=123&categories=Burgers,Drinks&sortBy=price&sortOrder=asc
```

---

### 🛒 Orders

```http
POST /delivery-app/orders
```

Body:

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

---

```http
GET /delivery-app/orders
```

Query params:

* `page`
* `perPage`
* `email`
* `phone`

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

---

## ⚙️ Environment Variables

Create `.env` file:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

---

## ▶️ Run Server

```bash
npm run dev
```

Server will run on:

```text
http://localhost:3000
```

---

## 🧠 Notes

* Phone numbers are normalized before saving and searching
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

Roman Hrydyn
Junior Fullstack Developer

---

## 📄 License

This project is created for educational purposes.
