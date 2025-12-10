# 🧪 API Testing Guide

Test all endpoints using these examples.

## Tools
- **Browser** - For GET requests
- **Postman** - Download from https://www.postman.com/downloads/
- **Thunder Client** - VS Code extension
- **curl** - Command line

---

## 1️⃣ Authentication

### Register New User
```bash
POST http://localhost:5000/api/auth/register

Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "company": "Tech Corp",
  "phone": "+1234567890"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Login
```bash
POST http://localhost:5000/api/auth/login

Body (JSON):
{
  "email": "admin@gbcomputers.com",
  "password": "Admin@123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "Admin",
    "email": "admin@gbcomputers.com",
    "role": "admin"
  }
}
```

### Get Current User (Protected)
```bash
GET http://localhost:5000/api/auth/me

Headers:
Authorization: Bearer <your-token-here>

Response:
{
  "success": true,
  "data": {
    "id": "...",
    "name": "Admin",
    "email": "admin@gbcomputers.com",
    "role": "admin"
  }
}
```

---

## 2️⃣ Projects

### Get All Projects
```bash
GET http://localhost:5000/api/projects

# With filters
GET http://localhost:5000/api/projects?category=web
GET http://localhost:5000/api/projects?featured=true
GET http://localhost:5000/api/projects?status=completed

Response:
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### Get Single Project
```bash
GET http://localhost:5000/api/projects/<project-id>

Response:
{
  "success": true,
  "data": {
    "title": "E-Commerce Platform",
    "description": "...",
    "category": "web",
    ...
  }
}
```

### Create Project (Admin Only)
```bash
POST http://localhost:5000/api/projects

Headers:
Authorization: Bearer <admin-token>

Body (JSON):
{
  "title": "New Project",
  "description": "Project description here",
  "category": "web",
  "client": "Client Name",
  "image": "https://example.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "duration": "3 months",
  "teamSize": 4,
  "status": "completed",
  "featured": true
}

Response:
{
  "success": true,
  "data": {...}
}
```

### Update Project (Admin Only)
```bash
PUT http://localhost:5000/api/projects/<project-id>

Headers:
Authorization: Bearer <admin-token>

Body (JSON):
{
  "title": "Updated Title",
  "featured": false
}
```

### Delete Project (Admin Only)
```bash
DELETE http://localhost:5000/api/projects/<project-id>

Headers:
Authorization: Bearer <admin-token>

Response:
{
  "success": true,
  "data": {}
}
```

---

## 3️⃣ Contact Form

### Submit Contact Form
```bash
POST http://localhost:5000/api/contact

Body (JSON):
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}

Response:
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {...}
}
```

### Get All Contacts (Admin Only)
```bash
GET http://localhost:5000/api/contact

Headers:
Authorization: Bearer <admin-token>

# With filter
GET http://localhost:5000/api/contact?status=new

Response:
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

### Update Contact Status (Admin Only)
```bash
PUT http://localhost:5000/api/contact/<contact-id>

Headers:
Authorization: Bearer <admin-token>

Body (JSON):
{
  "status": "replied"
}
```

---

## 4️⃣ Hire Requests

### Submit Hire Request
```bash
POST http://localhost:5000/api/hire

Body (JSON):
{
  "name": "Mike Johnson",
  "email": "mike@example.com",
  "phone": "+1234567890",
  "company": "StartupXYZ",
  "projectType": "web",
  "budget": "$10k-$25k",
  "timeline": "3-6 months",
  "description": "We need a custom web application..."
}

Response:
{
  "success": true,
  "message": "Your project request has been submitted successfully!",
  "data": {...}
}
```

### Get All Hire Requests (Admin Only)
```bash
GET http://localhost:5000/api/hire

Headers:
Authorization: Bearer <admin-token>

# With filters
GET http://localhost:5000/api/hire?status=pending
GET http://localhost:5000/api/hire?projectType=web

Response:
{
  "success": true,
  "count": 15,
  "data": [...]
}
```

### Update Hire Request (Admin Only)
```bash
PUT http://localhost:5000/api/hire/<request-id>

Headers:
Authorization: Bearer <admin-token>

Body (JSON):
{
  "status": "contacted"
}
```

---

## 5️⃣ Testimonials

### Get All Testimonials
```bash
GET http://localhost:5000/api/testimonials

# With filters
GET http://localhost:5000/api/testimonials?featured=true
GET http://localhost:5000/api/testimonials?isActive=true

Response:
{
  "success": true,
  "count": 4,
  "data": [...]
}
```

### Create Testimonial (Admin Only)
```bash
POST http://localhost:5000/api/testimonials

Headers:
Authorization: Bearer <admin-token>

Body (JSON):
{
  "name": "Robert Brown",
  "position": "CEO",
  "company": "TechStart",
  "image": "https://example.com/photo.jpg",
  "rating": 5,
  "message": "Excellent service and professional team!",
  "featured": true
}

Response:
{
  "success": true,
  "data": {...}
}
```

### Update Testimonial (Admin Only)
```bash
PUT http://localhost:5000/api/testimonials/<testimonial-id>

Headers:
Authorization: Bearer <admin-token>

Body (JSON):
{
  "featured": false,
  "isActive": true
}
```

---

## 6️⃣ Newsletter

### Subscribe to Newsletter
```bash
POST http://localhost:5000/api/newsletter/subscribe

Body (JSON):
{
  "email": "subscriber@example.com"
}

Response:
{
  "success": true,
  "message": "Successfully subscribed to newsletter!",
  "data": {...}
}
```

### Get All Subscribers (Admin Only)
```bash
GET http://localhost:5000/api/newsletter

Headers:
Authorization: Bearer <admin-token>

Response:
{
  "success": true,
  "count": 50,
  "data": [...]
}
```

### Unsubscribe
```bash
DELETE http://localhost:5000/api/newsletter/subscriber@example.com

Response:
{
  "success": true,
  "message": "Successfully unsubscribed from newsletter"
}
```

---

## 🧪 Testing with Postman

1. **Import Collection**
   - Create new collection "GB Computers API"
   - Add requests from above

2. **Setup Environment**
   - Create variable: `baseUrl` = `http://localhost:5000/api`
   - Create variable: `token` = (paste token after login)

3. **Use Variables**
   - URL: `{{baseUrl}}/projects`
   - Header: `Authorization: Bearer {{token}}`

4. **Test Flow**
   - Login → Copy token
   - Set token in environment
   - Test protected endpoints

---

## 🔍 Testing Checklist

### Public Endpoints
- [ ] Get all projects
- [ ] Get single project
- [ ] Get testimonials
- [ ] Submit contact form
- [ ] Submit hire request
- [ ] Subscribe to newsletter
- [ ] Register user
- [ ] Login user

### Admin Endpoints (Need Token)
- [ ] Create project
- [ ] Update project
- [ ] Delete project
- [ ] Get all contacts
- [ ] Get all hire requests
- [ ] Create testimonial
- [ ] Update testimonial
- [ ] Get newsletter subscribers

---

## 📊 Expected Status Codes

- `200` - Success (GET, PUT, DELETE)
- `201` - Created (POST)
- `400` - Bad Request (validation error)
- `401` - Unauthorized (no/invalid token)
- `403` - Forbidden (not admin)
- `404` - Not Found
- `500` - Server Error

---

## 💡 Tips

1. **Save Token**: After login, save the token for protected requests
2. **Check Response**: Always verify `success: true` in response
3. **Error Messages**: Read `message` field for error details
4. **IDs**: Copy IDs from GET responses to use in UPDATE/DELETE
5. **Validation**: API validates all required fields

---

## 🎯 Quick Test Script

```bash
# 1. Health check
curl http://localhost:5000/api/health

# 2. Get projects
curl http://localhost:5000/api/projects

# 3. Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gbcomputers.com","password":"Admin@123"}'

# 4. Submit contact (copy token from step 3)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Testing"}'
```
