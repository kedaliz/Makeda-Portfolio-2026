# Makeda Portfolio 2026

MERN portfolio application with a React + Vite frontend, Express API, and MongoDB.

## Tech Stack
- Frontend: React 19 + Vite
- Backend: Node.js + Express
- Database: MongoDB Atlas (or local MongoDB)

## Local Development

### 1) Run the API (server)
```bash
cd server
npm install
cp .env.example .env
```

Set `server/.env`:
```dotenv
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```

Start server:
```bash
npm start
```

### 2) Run the client
```bash
cd client
npm install
npm run dev
```

Client runs at `http://localhost:5173`.

## Render Deployment

Deploy as two Render services: one Web Service (API) and one Static Site (client).

### A) Backend (Render Web Service)
1. New -> Web Service -> connect this repo.
2. Configure:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. Add environment variables:
   - `MONGODB_URI` = your MongoDB Atlas URI
   - `PORT` = `10000` (or leave unset and Render will provide `PORT`)
4. Deploy and copy your API URL (example: `https://your-api.onrender.com`).

### B) Frontend (Render Static Site)
1. New -> Static Site -> connect this repo.
2. Configure:
   - Root Directory: `client`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
3. Add environment variable:
   - `VITE_API_URL` = `https://your-api.onrender.com/api`
4. Deploy.

The client reads `VITE_API_URL` in production and falls back to `http://localhost:5000/api` locally.

## API Routes
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

## Notes
- If the API is unavailable, the frontend can still display fallback sample content.
- Rate limiting is enabled on `/api/*` routes.
