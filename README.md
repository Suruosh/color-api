# Color API

A simple RESTful Web API built with Node.js, Express, and MongoDB Atlas.

## 🎯 Features

- ✅ Save colors to MongoDB
- ✅ Retrieve all colors
- ✅ Retrieve 3 random colors
- ✅ HTTP RFC 2616 compliant
- ✅ Proper status codes
- ✅ Runs locally with Node.js + internet

## 📋 Requirements

- Node.js (v14+)
- npm
- Internet connection
- MongoDB Atlas account (free tier)

## 🚀 Quick Start

### 1. Clone & Install
```bash
cd color-api
npm install
```

### 2. Configure MongoDB
Create or update `.env` file with your MongoDB Atlas URI:
```
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/colorsdb
```

**Get your MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string from "Connect" button
5. Replace `<password>` with your database user password

### 3. Run the Server
```bash
npm start
```

Server runs at: `http://localhost:3000`

## 📡 API Endpoints

### POST /api/colors
**Save a new color**

Request:
```json
POST /api/colors
Content-Type: application/json

{
  "name": "Red",
  "hex": "#FF0000"
}
```

Response (201 Created):
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Red",
  "hex": "#FF0000",
  "createdAt": "2024-01-20T10:30:00.000Z"
}
```

Status Codes:
- **201** Created – Color saved successfully
- **400** Bad Request – Missing name or hex
- **500** Internal Server Error – Server/database issue

---

### GET /api/colors
**Retrieve all colors**

Request:
```
GET /api/colors
```

Response (200 OK):
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Red",
    "hex": "#FF0000",
    "createdAt": "2024-01-20T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Blue",
    "hex": "#0000FF",
    "createdAt": "2024-01-20T10:35:00.000Z"
  }
]
```

Status Codes:
- **200** OK – Successfully retrieved
- **500** Internal Server Error – Server/database issue

---

### GET /api/colors/random
**Retrieve 3 random colors**

Request:
```
GET /api/colors/random
```

Response (200 OK):
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Red",
    "hex": "#FF0000",
    "createdAt": "2024-01-20T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Blue",
    "hex": "#0000FF",
    "createdAt": "2024-01-20T10:35:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Green",
    "hex": "#00FF00",
    "createdAt": "2024-01-20T10:40:00.000Z"
  }
]
```

Status Codes:
- **200** OK – Successfully retrieved
- **404** Not Found – No colors in database
- **500** Internal Server Error – Server/database issue

---

## ✅ HTTP Status Codes (RFC 2616)

| Code | Meaning | Used When |
|------|---------|-----------|
| **200** | OK | GET successful |
| **201** | Created | POST successful |
| **400** | Bad Request | Invalid input (missing fields) |
| **404** | Not Found | No data available |
| **500** | Internal Server Error | Server/database error |

## 🧪 Testing

### Using cURL
```bash
# POST a color
curl -X POST http://localhost:3000/api/colors \
  -H "Content-Type: application/json" \
  -d '{"name":"Red","hex":"#FF0000"}'

# GET all colors
curl http://localhost:3000/api/colors

# GET 3 random colors
curl http://localhost:3000/api/colors/random
```

### Using Postman
1. Import these endpoints
2. Test each method
3. Verify status codes and responses

## 📁 Project Structure

```
color-api/
├── models/
│   └── Color.js              # MongoDB schema
├── routes/
│   └── colorRoutes.js        # API endpoints
├── server.js                 # Express server setup
├── package.json              # Dependencies
├── .env                       # MongoDB credentials
└── README.md                 # This file
```

## 🔧 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (free tier)
- **ODM:** Mongoose
- **Config:** dotenv

All free and production-ready!

## ❓ Troubleshooting

**MongoDB connection failed?**
- Check `.env` file has correct URI
- Verify MongoDB Atlas IP whitelist (allow all: 0.0.0.0/0)
- Confirm database user password

**Port 3000 already in use?**
- Change PORT in `.env` to another number (e.g., 3001)
- Or kill process using port: `netstat -ano | findstr :3000`

**Dependencies not installing?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 📝 License

ISC
