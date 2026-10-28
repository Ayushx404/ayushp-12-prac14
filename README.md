# Personal Portfolio

A responsive single-page portfolio website built with ReactJS and React Router, with a clean, rounded UI inspired by Samsung's One UI. Built as part of Practical No. 14 (Single-Page Website Using ReactJS).

**Live site:** [@Vercel](https://ayushp-12-prac14.vercel.app/)

## Features

- Single-page application with client-side routing (no page reloads)
- Five pages: Home, About, Skills, Projects, Contact, plus a 404 page
- Reusable components and data-driven cards rendered with `map()`
- Responsive layout that works on desktop and mobile
- Automatic dark mode based on system theme
- No backend or database required

## Tech Stack

- [React](https://react.dev/) (JavaScript)
- [Vite](https://vitejs.dev/) as the build tool
- [React Router DOM](https://reactrouter.com/) for routing
- Plain CSS with custom properties (CSS variables)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git

# Move into the project folder
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```


## Project Structure

```
src/
├── App.jsx     # All pages and routes
├── App.css     # Styling and theme
└── main.jsx    # App entry point
```

## Author

**Ayush Patil**
MCA Student, Hiray Institute of Computer Application, Mumbai

- GitHub: [@Ayushx404](https://github.com/Ayushx404)
