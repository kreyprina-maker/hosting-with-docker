# English Grammar Hub
Vue 3 + Node.js/Express + MongoDB + Docker starter project

## Requirements
- Node.js and npm
- Docker Desktop

## 1. Start with Docker
1. Copy `.env.example` to `.env`.
2. Open a terminal in this project folder.
3. Run: `docker compose up --build`
4. Open the frontend: http://localhost:5173
5. Backend health check: http://localhost:5000/api/health

## 2. Run without Docker (development)
### Backend
```bash
cd backend
npm install
npm run dev
```
### Frontend (another terminal)
```bash
cd frontend
npm install
npm run dev
```

## Project structure
- `frontend/`: Vue 3 user interface
- `backend/`: Express API and MongoDB connection
- `docker-compose.yml`: starts frontend, backend and MongoDB together

## Notes
- `.env` contains local configuration. Never commit real passwords or secrets.
- MongoDB is only exposed to your local computer for development.
- Speech recognition availability depends on the browser. Production microphone access normally requires HTTPS.
