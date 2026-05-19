# ⚛️ Learning React.js: Architecture & Fundamentals

This repository documents my deep-dive journey into mastering React.js from scratch. Moving away from copy-pasting tutorials, this space tracks my core conceptual understanding, architectural breakdowns, and independent implementations using **Vite**, **React**, and **Tailwind CSS**.

> *"Luck is a function of doing and telling. Expanding my Luck Surface Area, one component at a time."*

---

## 🛠️ The Core Stack

* **Build Tool:** Vite (Fast HMR & optimal environment setup)
* **Library:** React.js (Functional Components)
* **Styling:** Tailwind CSS (Utility-first configuration for rapid UI mapping)
* **Logic Base:** Modern JavaScript (ES6+, Async/Await, Array Manipulation)

---

## 📌 Concepts Mastered & Documented

### 🏗️ 01. React Architecture Under the Hood
* Understanding the **Virtual DOM** and how React updates the UI.
* Deep-dive into **React Fiber** and the reconciliation algorithm.
* Building a basic custom React render engine to understand how JSX translates to actual DOM elements.

### 📦 02. Component & UI Architecture
* Creating reusable, atomic functional components.
* Mastering `props` and drilling data efficiently between parent and child components.
* Combining component states with dynamic Tailwind classes for reactive UI adjustments.

### 🧠 03. State Management & Hooks
* `useState`: Managing component memory and triggering UI re-renders.
* `useEffect`: Handling component lifecycles, synchronization, and handling cleanups.
* `useCallback` & `useMemo`: Optimizing performance and preventing unnecessary re-renders.
* `useRef`: Directly accessing DOM nodes and persisting values across renders.

---

## 🚀 Projects Built (Progressive Learning)

* [ ] **Custom React Renderer:** The bare-bones implementation of how React works behind the scenes.
* [ ] **State-Driven Counter & Theme Changer:** First steps into conditional rendering and active state mutations.
* [ ] **Dynamic Password Generator:** Complex state handling using `useCallback`, `useEffect`, and `useRef`.
* [ ] **Currency Converter:** Real-world application connecting React state with dynamic external REST APIs (`Fetch API`).

---

## 💻 Local Installation & Setup

To explore or run any of the learning modules locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/ISHANT-AG/React-with-Ishant.git)
   cd YOUR_REPO_NAME