# GB Computers Backend API

Complete REST API for GB Computers website with MongoDB database.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Setup Environment Variables
Copy `.env.example` to `.env` and update values:
```bash
cp .env.example .env
```

### 3. Install & Start MongoDB

**Option A: Local MongoDB**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service
- Default connection: `mongodb://localhost:27017/gb-computers`

**Option B: MongoDB Atlas (Cloud)**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create cluster and get connection string
- Update `MONGODB_URI` in `.env`

### 4. Seed Database (Optional)
```bash
npm run seed
```

### 5. Start Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server runs on: http://localhost:5000

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Admin)
- `PUT /api/projects/:id` - Update project (Admin)
- `DELETE /api/projects/:id` - Delete project (Admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (Admin)
- `PUT /api/contact/:id` - Update contact status (Admin)
- `DELETE /api/contact/:id` - Delete contact (Admin)

### Hire Requests
- `POST /api/hire` - Submit hire request
- `GET /api/hire` - Get all requests (Admin)
- `GET /api/hire/:id` - Get single request (Admin)
- `PUT /api/hire/:id` - Update request (Admin)
- `DELETE /api/hire/:id` - Delete request (Admin)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial (Admin)
- `PUT /api/testimonials/:id` - Update testimonial (Admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (Admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter` - Get all subscribers (Admin)
- `DELETE /api/newsletter/:email` - Unsubscribe

## 🔐 Default Admin Credentials

After seeding:
- Email: `admin@gbcomputers.com`
- Password: `Admin@123`

## 🛠️ Tech Stack

- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/         # Database config
│   ├── controllers/    # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── utils/          # Utilities & seeders
│   └── server.js       # Entry point
├── .env                # Environment variables
└── package.json        # Dependencies
```

## 🔧 Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gb-computers
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:8080
```

## 📝 Testing API

Use Postman, Thunder Client, or curl:

```bash
# Health check
curl http://localhost:5000/api/health

# Get projects
curl http://localhost:5000/api/projects

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gbcomputers.com","password":"Admin@123"}'
```
