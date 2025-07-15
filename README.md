# React Learning Blog

A simple React-based blog application built to help learners understand React fundamentals through a structured routing system, component reuse, lazy loading, and API integration for contributors.

---

## Features

- **React Router DOM** for client-side routing
- **Nested routes** using `Outlet`
- **Lazy loading** with `React.lazy` and `Suspense`
- **Dynamic routing** for individual blog posts (`/blogs/:postId`)
- **Axios** for fetching contributor data
---

## Tech Stack

- React
- React Router DOM v6+
- Axios
- CSS Modules

---

## Pages Overview

| Route              | Component       | Description                                          |
|-------------------|------------------|------------------------------------------------------|
| `/`               | `Home`           | Welcome screen with intro to the blog                |
| `/about`          | `About`          | Info about the blog and its purpose                  |
| `/blogs`          | `Blogs`          | List of all blog posts with links                    |
| `/blogs/:postId`  | `BlogPost`       | Dynamically displays blog post content by `postId`   |
| `/contributers`   | `Contributers`   | Lazy-loaded list of contributors fetched from API    |
| `*`               | `NotFound`       | Catch-all for invalid routes                         |

---