# React Login Dashboard with useEffect & Portal

This project demonstrates a **React-based login system** using `useEffect`, form validation, and state management. On successful login, it renders a **dashboard with charts** powered by Recharts. It also uses a **React Portal** for showing custom error messages.

---

## Key Features

- Login form with validation (name, email, password)
- Persists login state using `localStorage`
- Dashboard with:
  - Line Chart
  - Pie Chart
- Logout functionality with session reset
- Error handling via **React Portal**
- useEffect used in 3 variations for practice

---

## useEffect Variants Practiced

| Variation | Description |
|----------|-------------|
| `useEffect(() => {})` | Runs **after every render** |
| `useEffect(() => {}, [])` | Runs only **once on mount** |
| `useEffect(() => {}, [formData.name])` | Runs only when **name changes** |

---

## Tech Stack

- **React** (functional components)
- **React Hooks** (`useState`, `useEffect`)
- **Material UI (MUI)** for form and layout
- **Recharts** for data visualization
- **CSS Modules** for scoped styling
- **React DOM Portal** for custom modals

---

## Flow Overview

1. User lands on login form
2. Validates name (no `@` or `.`), email (`@` required), and password (min length 6)
3. If valid:
   - Login state is saved in `localStorage`
   - Dashboard is rendered
4. If invalid:
   - Error message is displayed via `ErrorPortal`
5. Logout removes data from `localStorage` and resets form

---