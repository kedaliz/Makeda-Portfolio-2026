# Makeda-Portfolio-2026

A modern MERN stack portfolio application to showcase projects and work for internship applications.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Styling**: CSS3 with responsive grid layout

## Features

- 📱 Responsive design with grid layout
- 🎨 Modern UI with gradient header and hover effects
- 🔄 RESTful API for project management
- 💾 MongoDB database integration
- 🎯 GET and POST project endpoints
- 🖼️ Project cards with images and technology tags
- 🔒 Security features: input validation, rate limiting, field whitelisting

## Project Structure

```
Makeda-Portfolio-2026/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── package.json
├── server/                 # Express backend
│   ├── config/            # Database configuration
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/makeda-portfolio
   PORT=5000
   ```

5. Start the server:
   ```bash
   npm start
   ```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on http://localhost:5173

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Example POST Request Body

```json
{
  "title": "My Project",
  "description": "Project description",
  "imageUrl": "https://example.com/image.jpg",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/username/repo",
  "liveUrl": "https://project-demo.com"
}
```

## Usage

1. Start MongoDB (if running locally)
2. Start the backend server
3. Start the frontend development server
4. Open http://localhost:5173 in your browser

The application will display sample projects even if the backend is not connected, making it easy to see the UI design.

## Development

- The frontend includes fallback sample data for demonstration purposes
- The backend uses Express with MongoDB/Mongoose
- CORS is enabled for cross-origin requests
- Environment variables are managed with dotenv

## License

MIT
