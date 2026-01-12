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

---

### 🗺️ 06 - [Routing and Advanced State Design](./06-routing-and-state-design/)
A multi-part module focusing on application architecture: first by building a custom client-side router, then by exploring advanced state design patterns, and finally by perfecting component reusability.

-   **Part 1: Custom Navigation and Routing**
    -   Explores the core mechanics of building a router from scratch for a SPA experience.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Client-Side Routing`, `SPA`

-   **Part 2: Mastering the State Design Process**
    -   Dives into best practices for structuring and managing complex application state.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `State Design Patterns`, `State Colocation`, `useReducer`

-   **Part 3: Practicing Props and State Design**
    -   A practical session dedicated to reinforcing the concepts of component composition, prop drilling mitigation, and state colocation.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Component Composition`, `Prop Drilling Mitigation`, `State Colocation`

-   **Part 4: Making Navigation Reusable**
    -   Focuses on abstracting the routing logic to create a versatile, reusable navigation component that can be easily integrated across the application.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Reusable Components`, `Component Abstraction`, `Client-Side Routing`

-   **Part 5: Creating Portals with ReactDOM**
    -   Explores the use of React Portals to render children into a different part of the DOM tree, which is essential for components like modals, tooltips, and popovers.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `React Portals`, `ReactDOM.createPortal()`, `Modal Implementation`, `DOM Structure Management`

-   **Part 6: Make a Feature-Full Data Table**
    -   Focuses on building a complex data table component, including features like sorting, filtering, and pagination, to manage large datasets efficiently.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Data Table`, `Sorting`, `Filtering`, `Pagination`, `Performance Optimization`, `Custom Hooks`

-   **Part 7: Getting Clever with Data Sorting**
    -   Focuses on implementing complex and performant sorting logic for large datasets, including multi-criteria and dynamic sorting.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Advanced Sorting Algorithms`, `useMemo for Performance`, `Dynamic State Management`, `Immutable Data Structures`

-   **Part 8: Custom Hooks In Depth**
    -   Delves deeper into creating, testing, and maintaining complex custom hooks for abstracting component logic and state management.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `Custom Hooks`, `Logic Abstraction`, `Separation of Concerns`, `Testing Hooks`

-   **Part 9: Into the World of Reducers**
    -   A deep dive into the `useReducer` hook for managing more complex state logic that involves multiple related sub-values, providing a clean separation of concerns.
    -   **Status:** ✅ Complete
-   **Key Concepts:** `useReducer Hook`, `Action/Dispatch Pattern`, `State Management`, `Complex State Logic`

---

### ⚛️ 07 - [Redux Toolkit and Global State](./07-redux-toolkit-and-global-state/)

This module introduces the modern, opinionated way of working with Redux using Redux Toolkit (RTK) to simplify state management and scale applications.

-   **Part 1: Managing Multiple Slices with Redux Toolkit**
    -   Focuses on configuring the Redux store, defining and combining multiple feature slices using `createSlice`, and handling cross-slice logic.
    -   **Status:** ✅ Complete
    -   **Key Concepts:** `Redux Toolkit (RTK)`, `configureStore`, `createSlice`, `Selectors`, `Global State Management`, `Provider`, `useSelector`, `useDispatch`

---

### 📡 08 - [API Interfacing with Async Thunks](./08-api-interfacing-with-async-thunks/)

This module focuses on handling asynchronous operations, such as API calls, within Redux using the power of `createAsyncThunk` and the advanced capabilities of RTK Query.

-   **Part 1: Interfacing with API's using Async Thunks**
    -   Covers the creation of thunks for fetching data, dispatching pending/fulfilled/rejected actions, and updating the state based on the API response.
    -   **Status:** ✅ Complete
    -   **Key Concepts:** `createAsyncThunk`, `Thunks`, `Async Operations`, `API Calls`, `Pending/Fulfilled/Rejected Actions`, `Loading States`

-   **Part 2: Modern Async with Redux Toolkit Query**
    -   Focuses on defining API services using RTK Query, simplifying data fetching, caching, invalidation, and automated loading/error state management.
    -   **Status:** ✅ Complete
    -   **Key Concepts:** `RTK Query`, `createApi`, `Endpoints`, `Data Caching`, `Automatic Refetching`, `Mutation`, `Query Hooks`

---

### 🗺️ 09 - [Google Maps Clone with TypeScript](./09-maps-clone-with-typescript/)

A practical, large-scale project focusing on building a dynamic mapping application using modern practices, strongly typed with TypeScript.

-   **Part 1: Build a Google Maps Clone with TypeScript**
    -   Covers integrating a mapping library (e.g., Google Maps API or Leaflet), managing map state (zoom, center), drawing markers, and defining interface types with TypeScript.
    -   **Status:** ✅ Complete
    -   **Key Concepts:** `TypeScript`, `Interfaces/Types`, `Mapping Libraries`, `React Hooks with TS`, `Third-Party Library Integration`, `Location Services`

-   **Part 2: Navigation and Data Fetching with React Router**
    -   Focuses on implementing advanced client-side routing, defining loaders for efficient data fetching based on URL parameters, and structuring the app's navigation flow.
    -   **Status:** ✅ Complete
    -   **Key Concepts:** `React Router DOM`, `Nested Routes`, `Loader Functions`, `useParams`, `useLoaderData`, `SPA Navigation`, `Data Hydration`

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


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

Copyright (c) 2025 YusufTufan
