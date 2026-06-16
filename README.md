# 🚀 StartupIQ — AI Startup Validator

> Validate your startup idea in 30 seconds with AI-powered analysis, market research, competitor insights, and a validation score.

![StartupIQ](https://img.shields.io/badge/StartupIQ-AI%20Powered-black?style=for-the-badge&logo=rocket)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

> preview - https://startupiq.vercel.app/
---

## ✨ Features

- 🎯 **Problem Statement** — AI identifies the core problem your idea solves
- 👥 **Target Audience** — Detailed breakdown of your ideal customers
- 📈 **Market Opportunity** — Market size and growth potential analysis
- ⚔️ **Competitor Analysis** — Real competitors you'll be up against
- ⚠️ **Risk Assessment** — Key risks and challenges to watch out for
- 💰 **Revenue Model** — How your startup can make money
- 🗺️ **MVP Roadmap** — Step-by-step plan to build your first version
- 🏆 **Validation Score** — 0–100 score with detailed breakdown across 5 dimensions

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| AI Model | Llama 3.3 70B via Groq |
| Deployment | Vercel (frontend) + Render (backend) |

---

## 📁 Project Structure

```
startupiq/
├── client/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── IdeaForm.jsx
│   │   │   ├── ScoreGauge.jsx
│   │   │   └── ResultCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Results.jsx
│   │   │   └── History.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
└── server/                   # Node + Express backend
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── validationController.js
    ├── middleware/
    │   └── errorHandler.js
    ├── models/
    │   └── Validation.js
    ├── routes/
    │   └── validationRoutes.js
    ├── services/
    │   └── geminiService.js
    └── server.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free)
- Groq API key (free) — [console.groq.com](https://console.groq.com)

### 1. Clone the repository

```bash
git clone https://github.com/prajikta08/StartUpIQ.git
cd StartUpIQ
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
GROQ_API_KEY=your_groq_api_key
```

Start the server:

```bash
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB connected
```

### 3. Setup the Frontend

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

---

## 🌐 Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Vercel | Auto-deploys on push to main |
| Backend | Render | Auto-deploys on push to main |

### Environment Variables for Production

**Render (Backend):**
```
MONGO_URI      = your_mongodb_connection_string
GROQ_API_KEY   = your_groq_api_key
NODE_VERSION   = 18.19.0
```

**Vercel (Frontend):**
```
VITE_API_URL = https://your-backend.onrender.com/api
```

---

## 📡 API Reference

### POST `/api/validate`
Analyze a startup idea.

**Request:**
```json
{
  "idea": "An AI-powered app that helps students find internships"
}
```

**Response:**
```json
{
  "_id": "...",
  "idea": "An AI-powered app...",
  "problemStatement": "...",
  "targetAudience": "...",
  "marketOpportunity": "...",
  "competitors": ["...", "..."],
  "risks": ["...", "..."],
  "revenueModel": "...",
  "mvpRoadmap": ["Step 1: ...", "Step 2: ..."],
  "score": 78,
  "scoreBreakdown": {
    "marketSize": 85,
    "uniqueness": 70,
    "feasibility": 80,
    "monetization": 72,
    "timing": 82
  },
  "createdAt": "2026-06-16T00:00:00.000Z"
}
```

### GET `/api/validate/history`
Get the last 10 validated ideas.

**Response:** Array of validation objects sorted by date.

---

## 🔑 Getting API Keys

### Groq API Key (Free)
1. Go to [console.groq.com](https://console.groq.com)
2. Sign up with Google
3. Click **"Create API Key"**
4. Copy the `gsk_...` key

### MongoDB Atlas (Free)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free M0 cluster
3. Create a database user
4. Whitelist IP `0.0.0.0/0`
5. Copy the connection string

---

## 📸 Screenshots

### Home Page
Clean minimal form to enter your startup idea with example prompts.

### Results Page
Full AI-generated analysis with an animated score gauge, breakdown bars, and 7 analysis cards.

### History Page
Browse all your previously validated startup ideas.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repo
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — feel free to use this project for learning or building your own version.

---

## 👩‍💻 Built by

**Prajikta** — built with ❤️ and a lot of debugging

> *"The best way to validate a startup idea is to stop guessing and start analyzing."*

---

⭐ If you found this useful, give it a star on GitHub!
