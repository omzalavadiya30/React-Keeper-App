# Keeper App

A modern, responsive note-taking app built with React and Tailwind CSS.

## 🚀 Live Demo

- [Keeper App on Netlify](https://your-netlify-link.netlify.app)
- [Keeper App on Vercel](https://your-vercel-link.vercel.app)

## ✨ Features

- Add, edit, and delete notes
- Responsive design for all devices
- Modern UI with gradients, animations, and accent colors
- Custom alert for empty input
- Long text handling with scroll and word wrap
- Clean, reusable React components

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Deployment:** Netlify, Vercel

## 🐞 Problems Faced & Solutions

- **Responsive Grid:**  
  Challenge: Making the notes grid look good on all screen sizes.  
  Solution: Used Tailwind’s responsive grid utilities and set max-width on cards.

- **Long Text Overflow:**  
  Challenge: Long notes breaking the card layout.  
  Solution: Used `break-words`, `whitespace-pre-line`, and `max-h` with scroll.

- **Horizontal Scroll:**  
  Challenge: Negative margins on the header caused unwanted horizontal scroll.  
  Solution: Switched to `w-full` and removed negative margins.

- **Impressive Design:**  
  Challenge: Making the app visually impressive but simple.  
  Solution: Used gradients, accent bars, and subtle animations with Tailwind CSS.

## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/keeper-app.git
cd keeper-app
npm install
npm run dev
```