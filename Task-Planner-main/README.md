# Task Planner (Frontend)

A simple task planner built with **React + Vite** for the NOVI Backend API.

## Features
- Register & Login (NOVI auth)
- Create tasks
- View tasks overview (Dashboard)
- View task details (dynamic route: `/tasks/:id`)
- Complete / Undo tasks
- Delete tasks
- Protected routes (Dashboard, Add Task, Task Detail)

---

## Getting started

### 1) Install dependencies
```bash
npm install
```

### 2) Environment variables
This project uses a `.env` file (Vite).

Create a `.env` file in the project root (same level as `package.json`) with:

```env
VITE_API_URL=https://novi-backend-api-wsgsz.ondigitalocean.app
VITE_PROJECT_ID=<YOUR_NOVI_PROJECT_ID>
```

You can copy `.env.example` and fill in your Project ID.

> **Note:** After changing `.env`, stop and restart Vite.

### 3) Run the app
```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Notes
- The API calls are centralized in `src/api/api.js`
- Authentication state is managed via React Context (`src/context/AuthContext.jsx`)
- Styling uses **CSS Modules** per component/page + a small global base file (`src/styles/global.css`)
