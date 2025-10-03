# ⚛️ React Learning Journey

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> A collection of foundational projects built while learning and mastering React. This repository serves as a log of my progress and hands-on practice with the React library.

---

## 💻 Projects

This repository contains a series of standalone projects, each designed to isolate and demonstrate a core concept of modern web development with React.

<br>

### 🚀 01 - [Creating Content with JSX](./01-creating-with-jsx/)

A fundamental introduction to creating dynamic content and UIs using JSX syntax. This project covers the basics of rendering elements and embedding expressions within markup.

-   **Key Concepts:** `JSX`, `Expressions in JSX`, `Rendering`

---

### ⚙️ 02 - [Building with Reusable Components](./02-reusable-components/)

This project focuses on a core principle of React: breaking down the UI into isolated, reusable components. It demonstrates how to pass data between components using props.

-   **Key Concepts:** `Components`, `Props`, `Composition`

---

### ⚡️ 03 - [State: How to Change Your App](./03-managing-state/)

Explores how to add interactivity to an application. This project shows how to manage component-level state with the `useState` hook and respond to user events.

-   **Key Concepts:** `State`, `useState Hook`, `Event Handling`

---
### 🌐 04 - [Using an API with React](./04-using-an-api-with-react/)
A project that fetches, displays, and interacts with data from a third-party API, covering asynchronous operations.

-   **Key Concepts:** `useEffect`, `API Fetching`, `Async/Await`

---
### 🗂️ 05 - [Handling Forms & API Data](./05-forms-and-api-data/)
A two-part project that covers capturing user input with forms and then sending that data to an API to be saved.

-   **Part 1: How to Handle Forms**
    -   Focuses on creating interactive forms to capture user input, covering controlled components and submission handling.
    -   **Status:** ✅ Complete

-   **Part 2: Data Persistence with API Requests**
    -   Demonstrates how to send the data from our form back to an API, enabling features like creating or updating records.
    -   **Status:** ⚠️ In Progress
-   **Key Concepts:** `Controlled Components`, `Form Events`, `POST/PUT Requests`, `Async/Await`

-   **Part 3: Global State with Context API**
    -   Shows how to share state across the app without "prop drilling".
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Forms`, `Controlled Components`, `API Requests`, `Async/Await`, `Context API`, `useContext Hook`, `Provider`

-   **Part 4: Deeper Dive into Hooks!**
    -   Explores advanced state and side-effect management with hooks like `useReducer`, `useCallback`, and custom hooks.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Forms`, `API Requests`, `Context API`, `useState`, `useEffect`, `useReducer`, `useCallback`, `Custom Hooks`

### 🗺️ 06 - [Custom Navigation and Routing](./06-custom-routing/)
This project explores the core mechanics of client-side routing. It demonstrates how to build a custom routing system from scratch to create a Single Page Application (SPA) experience without relying on external libraries.

-   **Key Concepts:** `Client-Side Routing`, `History API`, `SPA`, `Dynamic Components`

---

## 🚀 How to Run a Project

Each project is a standalone application. To run one locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/YusufTufan/react-mini-projects.git](https://github.com/YusufTufan/react-mini-projects.git)
    ```

2.  **Navigate to a project directory:**
    ```sh
    cd react-mini-projects/01-creating-with-jsx
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Start the development server:**
    ```sh
    npm start
    ```
    The application will be running on `http://localhost:3000`.
