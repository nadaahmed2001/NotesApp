# MERN Notes App

A full-stack notes management application built with the **MERN stack** (MongoDB, Express, React, Node.js).

**🌐 Live Demo:** https://notesapp-0asj.onrender.com/

---

## 🚀 Features

- Create, read, update, and delete notes
- Modern, responsive UI (Tailwind CSS + DaisyUI)
- Toast notifications with React Hot Toast
- Rate limiting using Upstash Redis
- Client-side routing with React Router
- Mobile-friendly design

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS + DaisyUI
- React Router
- Axios

### Backend
- Node.js (ES Modules)
- Express
- MongoDB + Mongoose
- Upstash Redis (rate limiting)

---

## 📋 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Upstash Redis account

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/nadaahmed2001/NotesApp
cd MERN-Crash-Course
```

### 2. Install dependencies
```bash
# Install all dependencies (root, backend, and frontend)
npm run build
```


### 4. Run the Application Locally

#### Option 1: Development Mode (Recommended for local development)
```bash
# Open first terminal - Start backend
cd Backend
npm run dev

# Open second terminal - Start frontend
cd Frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001

#### Option 2: Production Mode (Single server)
```bash
# Build the frontend first
cd Frontend
npm run build

# Start backend in production mode (serves both API and frontend)
cd Backend
npm start
```

The application will be available at: http://localhost:5001

#### Option 3: Using Root Scripts
```bash
# Install all dependencies and build frontend
npm run build

# Start backend server
npm start
```
The application will be available at: http://localhost:5001


### Backend
- `npm run dev` - Start backend in development mode with nodemon
- `npm start` - Start backend in production mode

### Frontend
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production

---

## 🌐 API Endpoints

### Notes API
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

---

## 🛡️ Rate Limiting

The application implements rate limiting using Upstash Redis to prevent abuse:
- Requests are limited per IP address
- Configurable rate limits in `Backend/src/middleware/ratelimiter.js`

---

## 🎨 UI Components

The frontend uses:
- **DaisyUI** components for consistent design
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Hot Toast** for notifications

---

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

---

## 🔒 Environment Variables

Make sure to set up these environment variables in `Backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

---

## 🚀 Deployment

### Production Build
1. Build the frontend: `cd Frontend && npm run build`
2. Set `NODE_ENV=production` in your environment
3. Start the backend: `cd Backend && npm start`

The backend will serve the built React app from the `Frontend/dist` directory.

### Environment Considerations
- In development: Frontend runs on Vite dev server (localhost:5173), backend on separate port (5001)
- In production: Backend serves both API and static frontend files
- CORS is configured for both development and production environments
- The app is currently deployed on Render: https://notesapp-0asj.onrender.com/

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Built with ❤️ using the MERN stack**
