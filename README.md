# 🎬 Movie Mania

> A React-based movie search and trailer web app powered by the **OMDb API** and **YouTube Data API v3**, allowing users to search films, explore details, and watch official trailers seamlessly — all in one place.

---

## 📖 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Demo](#-demo)
5. [Installation](#-installation)
7. [Project Structure](#-project-structure)
8. [Author](#-author)
9. [Future Enhancements](#-future-enhancements)

---

## 🎯 Overview

**Movie Mania** is a lightweight React web application that integrates with **OMDb API** for movie metadata and **YouTube API** for official trailers.  
It provides a clean and responsive UI to search for any movie, view its full details, and instantly play its trailer.

This project is perfect for learning **React**, **API integration**, and **React Router** navigation.

---

## 🚀 Features

- 🔍 **Search Movies** by title using OMDb API  
- 🧾 **View Detailed Info** including poster, genre, cast, plot, and ratings  
- ▶️ **Watch Official Trailers** fetched dynamically from YouTube  
- 🧭 **Dynamic Routing** with React Router DOM  
- 🔄 **Real-Time Query Updates**  
- 💡 **Responsive Design** for desktop and mobile  
- 🔗 **Creator Portfolio Link** on homepage  

---

## 🧠 Tech Stack

| Category | Tools |
|-----------|-------|
| Frontend | React (Hooks, Functional Components) |
| Routing  | React Router DOM |
| APIs     | OMDb API, YouTube Data API v3 |
| Styling  | Custom CSS |
| Build Tool | Create React App or Vite |

---

## 🌐 Demo

> Deployed version on **Netlify**
``` https://movimaniaa.netlify.app/ ```

---

## ⚙️ Installation

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rraj005/movie-mania.git
cd movie-mania
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Start the Development Server
```bash
npm start
```
### 4️⃣ Open in Browser
```bash
http://localhost:3000
```
## 📁 Project Structure

```bash
movie-mania/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.js         # Search input + navigation
│   │   ├── SearchResults.jsx    # Displays movie list from search
│   │   ├── MovieCard.js         # Displays movie poster + title
│   │   ├── MovieDetail.js       # Displays full movie info + trailer
│   │
│   ├── App.js                   # Main app + routes
│   ├── App.css                  # Global styling
│   └── index.js                 # Entry point
│
├── package.json
└── README.md
```
## 👨‍💻 Author

**[Raunit Raj](https://www.linkedin.com/in/raunit-raj)**  
🎬 Developer of *Movie Mania*  
💡 Confident All-Rounder Techie 

> 💼 *Creator Portfolio:* [LinkedIn Profile](https://www.linkedin.com/in/raunit-raj)

---

## 🛠️ Future Enhancements

- ⭐ Add Favorites / Watchlist  
- 📱 Improve mobile responsiveness  
- 💬 Add user reviews & comments  
- 🎞️ Display related movies  
- 🧭 Add genre-based filtering and sorting   
