# ACM Student Chapter DKTE Website

Welcome to the official source code for the ACM Student Chapter DKTE website. This website is built using pure HTML, CSS, and vanilla JavaScript, meaning there is no complex build step required (no React, no Node.js). It is designed to be easily modifiable by anyone on the team!

## 🚀 How to Run the Website

To view the website locally on your computer:
1. Double-click the `index.html` file to open it in your browser.
2. Alternatively, use a tool like the VS Code "Live Server" extension to host it locally for a better development experience.

---

## 👥 How to Add/Edit Team Members

You **do not** need to edit the HTML files to change the team. All team data is dynamically loaded from a single file!

1. Open `data.js` in your code editor.
2. Find the `TEAM_MEMBERS` array.
3. Add a new member object anywhere in the list. Ensure you include a comma `,` between every object!

```javascript
    {
        name: "John Doe",
        role: "Webmaster",
        image: "./assets/images/team/johndoe.jpg",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
    }, // <-- Do not forget this comma!
```

---

## 📅 How to Add/Edit Events

Just like team members, events are managed centrally in `data.js`.

1. Open `data.js`.
2. Find the `EVENTS` array.
3. Add a new event object. The `category` will automatically show up as a glass badge on the event card!

```javascript
    {
        id: "unique-event-id",           // Must be unique (used for the URL)
        title: "New AI Workshop",
        category: "upcoming",            // Options: "upcoming", "ongoing", "past"
        date: "October 10, 2026",
        description: "A deep dive into neural networks.",
        banner: "./assets/images/events/ai-workshop.jpg",
        link: "#"                        // External registration link (if any)
    }, // <-- Do not forget this comma!
```

---

## 🎨 How to Change Colors & Themes

The website uses a modern, dark "glassmorphism" aesthetic. The colors are defined as variables at the very top of the CSS file.

1. Open `styles.css`.
2. Find the `:root` block at the very top (around Line 22).
3. Change the Hex color codes to completely re-theme the website!

```css
:root {
    --bg-dark: #070b14;          /* The deep background color */
    --primary-blue: #2563eb;     /* Main buttons and accents */
    --primary-cyan: #06b6d4;     /* Secondary accents */
    /* ... */
}
```

---

## 📁 File Structure Guide

- **`index.html`**: The main landing page (Hero, About, Events overview).
- **`team.html`**: The dedicated "Meet the Board" page showing all members.
- **`event-details.html`**: The dynamic template page that loads specific details for an event when clicked.
- **`styles.css`**: The central stylesheet controlling all visuals, layout grids, and mobile responsiveness.
- **`script.js`**: The central JavaScript engine that renders the team/events from data.js, handles the sticky floating navbar, and powers the scroll-reveal animations.
- **`data.js`**: The configuration file holding all the text content for the team and events.

Happy coding!
