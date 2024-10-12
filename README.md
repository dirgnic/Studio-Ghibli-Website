Ghibli Fanpage Website


This project is a fanpage dedicated to Studio Ghibli, created as part of the **Web Technologies Lab** for FMI coursework. It showcases the animation process, popular movies, characters, and founders of Studio Ghibli using modern web technologies.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How to Run](#how-to-run)
- [Future Enhancements](#future-enhancements)

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes using media queries.
- **Image Slideshow**: A slideshow on the homepage showcases iconic Ghibli films.
- **Interactive Elements**: Hover and click effects enhance user engagement with movies and characters.
- **Login Modal**: Users can log in via a modal form.
- **Timeline Animation**: A timeline section visually highlights key events in Studio Ghibli’s history with fade-in animations.
- **Dropdown Navigation**: The website features a multi-level navigation menu with hover-based dropdowns for easy access.

## Technologies Used

### Frontend:
- **HTML5**: Provides the structure for the website, ensuring semantic and accessible content.
- **CSS3**: Styles the web pages, including layouts, colors, typography, animations, and transitions. It includes:
  - Media queries for responsiveness.
  - Keyframe animations for fading in elements and hover effects.
- **JavaScript (ES6)**: Adds interactivity to the site, including:
  - **Event Listeners** for hover, click, and form submission actions.
  - Dynamic content loading via **AJAX (XMLHttpRequest)**.
  - Form validation and local storage for storing login information.
- **CSS Flexbox and Grid**: For flexible and adaptive layouts.

### Backend:
- **Node.js**: Powers the backend server.
- **Express.js**: A minimalist web framework for handling HTTP requests.
- **Static File Serving**: Express serves the static HTML, CSS, and JS files for the website.
- **404 Error Handling**: A custom 404 error page is displayed for undefined routes.

### Additional Libraries:
- **Google Fonts (Inconsolata)**: For custom typography used throughout the site.

## File Structure

```
/proj
│
├── /img                  # Contains image assets used in the project
├── /css                  # Contains all the stylesheets
│   ├── index.css
│   ├── founders.css
│   └── history.css
...
├── /js                   # Contains all the JavaScript files
│   ├── index.js
│   ├── founders.js
│   └── history.js
├── index.html            # Homepage of the fanpage
├── founders.html         # Page showcasing Studio Ghibli founders
└── history.html          # Page highlighting Studio Ghibli's history
...
```

## How to Run

1. Clone the repository or download the files.
2. Make sure you have **Node.js** installed.
3. Navigate to the project folder and install dependencies:
   ```bash
   npm install
   ```
4. Start the Express server:
   ```bash
   node server.js
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the fanpage.

## Future Enhancements

- **User Authentication**: Improve the login system with real authentication and a user database.
- **Additional Pages**: Add more pages detailing Studio Ghibli films, characters, and production processes.
- **Improved Animations**: Implement more sophisticated animations using CSS or JavaScript frameworks like GSAP.

---

This project is a work in progress and was created as part of a university assignment.
```
