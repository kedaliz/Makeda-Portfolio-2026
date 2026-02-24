# Makeda Portfolio 2026

A full-stack portfolio application built with the MERN stack:
- React + Vite frontend
- Express + Node.js API
- MongoDB database

## Project Structure

```text
client/   # React frontend
server/   # Express API
```

## Tech Stack

- React 19
- Vite
- Node.js + Express
- MongoDB (Atlas or local)

## Quick Start (Local)

### 1) Start the API

```bash
cd server
npm install
cp .env.example .env
```

Create `server/.env`:

```dotenv
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```

Run API:

```bash
npm start
```

### 2) Start the Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs at `http://localhost:5173` and calls API at `http://localhost:5000/api` by default.

## Environment Variables

### Frontend (`client`)
- `VITE_API_URL` (optional in local, required in production)
- Example: `https://your-api.onrender.com/api`

### Backend (`server`)
- `MONGODB_URI` (required)
- `PORT` (optional; defaults to platform-provided port in production)

## Deployment

### Option A: Render (recommended for backend)

Deploy as two services:

1. **Backend Web Service** (`server`)
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Env vars: `MONGODB_URI`, `PORT` (optional)

2. **Frontend Static Site** (`client`)
   - Root Directory: `client`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Env var: `VITE_API_URL=https://your-api.onrender.com/api`

### Option B: Vercel (frontend) + Render/Railway (backend)

This repo includes a root `vercel.json` to deploy the frontend from `client/`.

1. Import repo into Vercel
2. Deploy with existing root `vercel.json`
3. Set `VITE_API_URL` in Vercel project settings to your live backend URL ending in `/api`

> Note: The current Express server (`server/server.js`) is not serverless-ready as-is for Vercel Functions.

## API Endpoints

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

## Troubleshooting

- If deployed frontend shows no project data, verify `VITE_API_URL` is set correctly.
- If requests fail from Vercel domain, confirm backend CORS allows your frontend domain.
- If backend is unavailable, frontend may show fallback sample content.
