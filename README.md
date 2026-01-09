# 🛒 Shoppora – Premium Multi-Role E-Commerce MarketPlace 🛍️

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![FramerMotion](https://img.shields.io/badge/Framer%20Motion-black?style=flat&logo=framer&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive%20Design-success)

A high-performance, visually stunning **Multi-Role E-Commerce Ecosystem** built with **React, Tailwind CSS, and TypeScript**.  
Shoppora provides a seamless shopping journey featuring role-based dashboards (Admin, Seller, Customer, Delivery), real-time cart/wishlist management, and an immersive user interface powered by advanced animations.

---

## 📝 About This README

This `README.md` explains the architecture of the **Shoppora Shopping MarketPlace**, including its multi-user logic, technical stack, folder structure, and instructions for local setup.

---

## 💡 The Challenge

Most **e-commerce** tutorials focus only on the buyer. I wanted to solve the complexity of **Role-Based Access Control (RBAC)**—ensuring that sensitive data (like Seller revenue or Admin settings) is only accessible to the right users while maintaining a unified, high-performance codebase.

---

## 🧾 Overview

Shoppora is more than just a store; it’s a complete marketplace simulation:

- **Dynamic Shop Engine**: Filterable product catalog across Electronics, Fashion, Home, and Sports.
- **Multi-Role Ecosystem**: Dedicated interfaces for **Customers, Sellers, Admins, and Delivery Partners**.
- **Global State Management**: Context-powered **Cart** and **Wishlist** systems with persistent logic.
- **Modern UI/UX**: Cinematic Hero sections, animated promo banners, and smooth transitions.
- **Authentication Simulation**: Secure role-based login and signup using `localStorage` persistence.

Ideal for:
- Showcasing complex **React Context API** and **State Management**.
- Demonstrating **Role-Based Access Control (RBAC)** in frontend applications.
- Modern styling with **Tailwind CSS** and **Framer Motion** animations.

---

## 🧠 State Logic

- **CartContext** - Manages real-time item counts, price calculations, and item persistence.
- **WishlistContext** - Handles "Save for Later" logic and cross-context communication (Move to Cart).
- **LocalStorage** - Serves as a lightweight "mock-backend" to persist user roles and cart items across page refreshes.

## ✨ Features

- **🎭 Four Distinct Dashboards** – Custom workflows for managing orders, stock, users, and deliveries.
- **🔍 Intelligent Search** – Real-time filtering system that scans titles and categories via a centralized search utility.
- **🛒 Smart Cart Logic** – Automatic quantity increments, subtotal calculations, and item removal.
- **💖 Integrated Wishlist** – Save-for-later functionality with a specialized "Move to Cart" feature.
- **⚡ Framer Motion Animations** – Spring-based hover effects, scroll-into-view entry transitions, and smooth modal overlays.
- **📱 Fully Responsive** – A mobile-first approach ensuring a premium experience on all devices.

---

## ⚙️ Prerequisites

- **Node.js** (v18.0 or higher)
- **npm** or **yarn** package manager
- A modern web browser (Chrome, Edge, Firefox, Safari)

---

## 💻 Technologies Used

- **React 18** – Component-based UI architecture.
- **TypeScript** – Type-safe development for robust data handling.
- **Tailwind CSS** – Utility-first styling with modern gradients and responsive grids.
- **Framer Motion** – High-end UI animations and gestures.
- **Lucide React** – Clean and consistent iconography.
- **React Router Dom** – Dynamic SPA routing and role-based navigation.

---

## 📂 Folder Structure

```text
Shoppora/
├── src/
│   ├── assets/           # Categorized images (Hero, Products, Categories)
│   ├── components/       # UI (Header, Hero, ProductCart, LoginModal, etc.)
│   ├── context/          # Global State (CartContext, WishlistContext)
│   ├── data/             # Mock Database (Products.tsx)
│   ├── pages/            # Dashboards (Admin, Seller, Customer, Delivery)
│   └── utils/            # Logic helpers (searchProducts.ts)
├── index.html            # Main entry point
├── tailwind.config.js    # Styling configuration
├── tsconfig.json         # TypeScript rules
└── package.json          # Dependencies and scripts


---


```

## 🚀 Getting Started

To run this project locally:

1. Clone the repository:

```bash

git clone  https://github.com/Mohamed-Asif-1000/Shoppora---Multi-Role-E-Commerce-Marketplace.git


```

2. Navigate to the Project Folder:

```bash

cd  Shoppora-Multi-Role-E-Commerce-Marketplace

```

3. Install dependencies :

```bash

npm install

```
4.  Start the development server:

```bash

npm run dev

```

---


## 🧠 How to Use


-  1️⃣  **Explore the Shop** - Use the search bar in the Header or browse through the animated Category grid.
-  2️⃣  **Manage Favorites** - Add items to your Wishlist and use "Move to Cart" to quickly finalize a purchase.
-  3️⃣  **Test Multi-Roles** - Sign up via the Signup page and select a role (Seller, Delivery, Admin) to unlock specific features.
-  4️⃣  **Admin Control** - Log in as an Admin to manage the platform settings and see the simulated user list.
-  5️⃣  **Seamless Shopping** - Experience the live cart counter in the Header as you shop across different sections.


---


## 🔄 Responsive Design

---

- **📱 Mobile (≤640px):**-  Single-column product grids and a sleek slide-out hamburger menu.

- **📟 Tablets (640px-1024px):**-  Adjusted layout for tablet displays, featuring 2-column product views.

- **💻 Desktop (>1024px):**-  Full horizontal navigation, multi-column layouts, and hover-triggered interactions.

---


## 🌍 Live Demo

---

You can view the live version of the website here:  

👉 [https://shoppora-multi-role-e-commerce-mark.vercel.app/](https://shoppora-multi-role-e-commerce-mark.vercel.app/)

---

## 📝 License

---

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- **Lucide Icons** for the professional iconography.
- **Framer Motion** for making UI interactions smooth and delightful.
- **Unsplash/Pixabay** – Contributors for providing high-quality, royalty-free commercial product photography.
- **Gemini (Google AI)** – For generating high-quality Images

---

## 👤 Author

**Mohamed Asif.A** 

💼 Front-End Developer  

🔗 [GitHub Profile](https://github.com/Mohamed-Asif-1000)  
🔗 [LinkedIn](https://www.linkedin.com/in/mohamed-asif-a-14162326atm)

⭐ *If you like this project, consider giving it a star on GitHub!*
