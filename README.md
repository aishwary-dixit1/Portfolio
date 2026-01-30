# ⚡️ Aishwary Dixit | Professional Portfolio

> A modern, high-performance developer portfolio featuring **Glassmorphism**, **Infinite Skill Streams**, and **Physics-based Animations**. Built for speed and aesthetics.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-Cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Motion-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## ✨ Features

- **🎨 Premium Glassmorphism UI:** Frosted glass effects using the latest CSS backdrop filters.
- **🌊 Infinite Velocity Skill Stream:** A dynamic, bi-directional scrolling ticker for technical skills with neon hover effects.
- **🍱 Bento Grid Layout:** A clean, grid-based showcase for projects and coding profiles.
- **🚀 Physics-Based Animations:** Smooth entry animations and floating interactions using Framer Motion spring physics.
- **📱 Fully Responsive:** Optimized for all devices, from large 4K monitors to mobile screens.
- **🌑 Dark Mode First:** A deep, professional aesthetic designed for developers.

## 🛠 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS v4 (No config file, pure CSS variables)
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Language:** TypeScript
* **Deployment:** Vercel

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
portfolio/
├── app/
│   ├── layout.tsx      # Main layout wrapper
│   ├── page.tsx        # The main single-page portfolio
│   └── globals.css     # Tailwind v4 imports & custom glass styles
├── components/
│   └── FloatingNav.tsx # The animated bottom navigation bar
├── lib/
│   └── data.ts         # Centralized data file (Edit this to change content!)
└── public/             # Static assets (Resume, Images)
```

## ✏️ Customization
All personal data is isolated in lib/data.ts. To make this portfolio your own, simply edit that file:

```TypeScript
// lib/data.ts
export const USER = {
  name: "Your Name",
  role: "Your Role",
  // ... update skills, projects, and links here
};
```

## 🚢 Deployment
The easiest way to deploy is using Vercel:
- Push your code to a GitHub repository.
- Import the repository on Vercel.
- Vercel will automatically detect Next.js.
- Click Deploy.

## 👤 Author
### Aishwary Dixit
- B.Tech CSE @ IIIT Ranchi
- GDG On Campus Lead