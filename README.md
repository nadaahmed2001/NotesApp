# MERN Notes App

A full-stack notes management application built with the MERN stack (MongoDB, Express, React, Node.js). Features include CRUD operations for notes, rate limiting, and a modern responsive UI.

## 🚀 Features

- ✅ Create, read, update, and delete notes
- 🎨 Modern, responsive UI with Tailwind CSS and DaisyUI
- 🔄 Real-time updates with React Hot Toast notifications
- 🛡️ Rate limiting protection with Upstash Redis
- 📱 Mobile-friendly design
- 🚀 Production-ready with optimized build process
- 🌐 Client-side routing with React Router
- 🎯 Dark theme with gradient background
- 📁 Organized MVC architecture in backend
- 🔧 ES Modules support throughout the project

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment (ES Modules)
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables
- **Upstash Redis** - Rate limiting
- **Nodemon** - Development auto-restart

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Upstash Redis account (for rate limiting)

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd MERN-Crash-Course
```

### 2. Install dependencies
```bash
# Install all dependencies (root, backend, and frontend)
npm run build
```

### 3. Environment Setup

Create a `.env` file in the `Backend` directory:

```env
# MongoDB Configuration
MONGO_URI=your_mongodb_connection_string

# Server Configuration
PORT=5001
NODE_ENV=development

# Upstash Redis Configuration (for rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### 4. Run the Application

#### Development Mode
```bash
# Start backend in development mode
cd Backend
npm run dev

# In another terminal, start frontend
cd Frontend
npm run dev
```

#### Production Mode
```bash
# Build the frontend
cd Frontend
npm run build

# Start backend in production mode
cd Backend
npm start
```

## 🔧 Available Scripts

### Root Level
- `npm run build` - Install dependencies and build frontend
- `npm run start` - Start backend server

### Backend
- `npm run dev` - Start backend in development mode with nodemon
- `npm start` - Start backend in production mode

### Frontend
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

### Notes API
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🛡️ Rate Limiting

The application implements rate limiting using Upstash Redis to prevent abuse:
- Requests are limited per IP address
- Configurable rate limits in `Backend/src/middleware/ratelimiter.js`

## 🎨 UI Components

The frontend uses:
- **DaisyUI** components for consistent design
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Hot Toast** for notifications

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🔒 Environment Variables

Make sure to set up these environment variables in `Backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

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
- The app is currently deployed with frontend on Vercel and backend configuration ready for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your `MONGO_URI` in the `.env` file
   - Ensure MongoDB is running and accessible

2. **Rate Limiting Errors**
   - Verify your Upstash Redis credentials
   - Check Redis connection in the backend logs

3. **Frontend Build Issues**
   - Clear node_modules and reinstall dependencies
   - Check for any TypeScript errors

4. **CORS Issues**
   - In development, CORS is configured for localhost:5173 and the deployed Vercel app
   - In production, ensure proper CORS configuration for your domain

## 📞 Support

If you encounter any issues or have questions, please:
- Check the troubleshooting section above
- Open an issue on GitHub
- Review the code comments for additional context

---

**Built with ❤️ using the MERN stack**
