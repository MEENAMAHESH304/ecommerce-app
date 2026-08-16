# ShopEase E-Commerce Capstone

A full-stack ecommerce product catalog with a React frontend and Express backend.

## Tech Stack

- Frontend: React + Vite + React Router
- Backend: Node.js + Express
- Database: MongoDB
- Deployment: Vercel (frontend) + Render (backend)

## Local Development

### Backend

1. Open a terminal in `backend`
2. Copy `.env.example` to `.env`
3. Update `MONGO_URI` with your MongoDB connection string
4. Run:

```bash
npm install
npm run dev
```

### Frontend

1. Open a terminal in `frontend`
2. Copy `.env.example` to `.env`
3. Set `VITE_API_URL` to your local backend URL, such as `http://localhost:5000`
4. Run:

```bash
npm install
npm run dev
```

## Production Deployment

### Backend on Render

1. Push this repo to GitHub
2. Create a new Web Service on Render
3. Connect the repository
4. Use the `backend` folder as the root directory
5. Set environment variables using `.env.example` values
6. Deploy

### Frontend on Vercel

1. Import the repo into Vercel
2. Set the project root to `frontend`
3. Add environment variable:
   - `VITE_API_URL=https://your-render-backend-url.onrender.com`
4. Deploy

## Project Structure

- `frontend/` — UI, routes, components, styles
- `backend/` — API server and database config

## Notes

- The frontend uses environment-based API configuration to support both local and production deployments.
- The backend uses CORS configuration so the deployed frontend can access the API.
