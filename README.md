# FitZone - Fitness Community App 🏋️‍♂️💪

## 🌟 Overview
**FitZone** is a fitness e-commerce shop and community app where users can:
- **Explore, join, save, and create fitness challenges**
- **Browse and filter exercises** using an external API
- **Engage in the fitness blog** through posts, comments, and likes
- **Shop for fitness products**, add items to cart, checkout, leave reviews, and rate products
- **View other users' profiles**, including their saved and joined challenges, liked posts.
- **Access an admin panel** to manage users, challenges, posts, products, orders, and track total revenue

🔗 **Live Demo**: (https://fitzone3.netlify.app/)

---

## 🚀 Features
- ✅ **Authentication** (Register/Login) with MongoDB, JWT
- ✅ **Community Feed** (Posts, Likes, Comments, Reviews)
- ✅ **Exercise Library** (Fetched via External API)
- ✅ **Challenges System** (Join, Save & Create Fitness Challenges)
- ✅ **Fitness Blog** (Read & Comment on Fitness Articles)
- ✅ **Fitness & Sport Shop** (Add to Cart, Checkout, Previews, Ratings)
- ✅ **User Profiles** (View Saved Challenges, Liked Posts, Testimonials)
- ✅ **Admin Panel** (Manage Users, Challenges, Posts, Products, Orders, Revenue Tracking)
- ✅ **Responsive Design** (Optimized for Mobile & Desktop)
- ✅ **Deployment** (Hosted on Netlify/Vercel)

---

## 🏢 Tech Stack
- **Frontend**: React.js (React Router, TailwindCSS)
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Exercise Data**: ExerciseDB API

---

## 🌍 Project Setup
### ♻️ Installation Steps
#### 1. Clone the Repository
```bash
https://github.com/Radolsav16/FitZone-fitness-app.git
```

#### 2. Install Dependencies
Navigate to both the server and client folders and run:
```bash
npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the root directory of the server and add:
```env
PORT=3030
JWT_SECRET=fitzone-secret_sdfhbksjfb8374
MONGO_URI=mongodb://localhost:27017/fitzone-app
```

#### 4. Run the Development Server
To start both the server and client, run:
```bash
npm run dev
```

---

## 📁 File Architecture
```
FitZone/
|├── client/               # Frontend React Application
|   |├── src/
|   |   |├── api/      # Component Logic
|   |   |├── components/      # Reusable UI Components
|   |   |├── pages/           # App Pages (Home, Shop, Blog, Challenges, etc.)
|   |   |├── context/         # Global State Management
|   |   |├── hooks/           # Custom React Hooks
|   |   |├── providers/       #Add context to App.jsx
|   |   |├── utils/           # Utility Functions
|   |   |└── assets/         # Images & Static Files
|   |└── package.json        # Frontend Dependencies
|├── server/               # Backend Node.js Application
|   |├── models/          # Mongoose Models (User, Product, Post, Challenge, Order)
|   |├── service/         # Servces for models
|   |├── index.js/        # Main function request handler
|   |├── config/          # Database Connection & JWT Configurations
|   |└── package.json     # Backend Dependencies
|├── .gitignore           # Ignore node_modules, .env, etc.
|├── README.md            # Project Documentation
|└── .env                 # Environment Variables (Not committed)
```

---





