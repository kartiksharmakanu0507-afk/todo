# Todo App

[![View on GitHub](https://img.shields.io/badge/View%20on-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/kartiksharmakanu0507-afk/todo) [![Local Dev](https://img.shields.io/badge/Local-localhost%3A3000-blue?style=for-the-badge)](http://localhost:3000)

A full-stack Todo application built with **Next.js 16**, **MongoDB**, and **Tailwind CSS**. Supports creating, reading, updating, and deleting tasks via a clean REST API.

---

## Features

- Add new tasks instantly
- Edit existing tasks inline
- Delete tasks with one click
- Persistent storage with MongoDB
- REST API built with Next.js Route Handlers
- Responsive UI styled with Tailwind CSS

---

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | Next.js 16, React 19, TypeScript |
| Styling    | Tailwind CSS v4             |
| Backend    | Next.js API Routes          |
| Database   | MongoDB + Mongoose          |
| HTTP Client| Axios                       |

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kartiksharmakanu0507-afk/todo.git
   cd todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
todo/
├── app/
│   ├── api/
│   │   └── task/
│   │       └── route.js       # REST API (GET, POST, PATCH, DELETE)
│   ├── components/
│   │   ├── TodoForm.tsx       # Input form + state management
│   │   └── TodoList.tsx       # Task list rendering
│   ├── globals.css            # Global styles + Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── lib/
│   └── db.js                  # MongoDB connection
├── Model/
│   └── task.js                # Mongoose Task schema
└── package.json
```

---

## API Reference

| Method | Endpoint    | Description         |
|--------|-------------|---------------------|
| GET    | `/api/task` | Fetch all tasks     |
| POST   | `/api/task` | Create a new task   |
| PATCH  | `/api/task` | Update a task by ID |
| DELETE | `/api/task` | Delete a task by ID |

### Request body examples

**POST** — `{ "text": "Buy groceries" }`

**PATCH** — `{ "id": "<task_id>", "text": "Updated text" }`

**DELETE** — `{ "id": "<task_id>" }`

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

Deploy easily on [Vercel](https://vercel.com). Set the `MONGO_URI` environment variable in your Vercel project settings.

---

## Contributors

| Name            | GitHub                                                       |
|-----------------|--------------------------------------------------------------|
| Kartik Sharma   | [@kartiksharmakanu0507-afk](https://github.com/kartiksharmakanu0507-afk) |

---

## License

MIT
