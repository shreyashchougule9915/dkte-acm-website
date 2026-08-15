# DKTE ACM Student Chapter Website

Welcome to the DKTE ACM Student Chapter website repository! This site is designed to be fast, responsive, and incredibly easy to maintain.

## How to Update Content

You don't need to know HTML or CSS to update the team or events. Everything is controlled via the `data.js` file.

### Updating Team Members
1. Open `data.js`.
2. Locate the `TEAM_MEMBERS` array.
3. Add or modify an object:
   ```javascript
   {
       name: "Your Name",
       role: "Your Role",
       image: "./assets/images/team/your-photo.jpg",
       linkedin: "your-linkedin-url",
       github: "your-github-url"
   }
   ```
4. Place your photo in the `assets/images/team/` folder.

### Updating Events
1. Open `data.js`.
2. Locate the `EVENTS` array.
3. Add a new event:
   ```javascript
   {
       title: "Event Name",
       category: "upcoming", // change to "past" when done
       date: "Date, Year",
       description: "Short description",
       banner: "./assets/images/events/banner.jpg",
       link: "registration-link"
   }
   ```

## Development
- Simply open `index.html` in any web browser to view the site locally.
- No build tools required!

## Deployment
This project is structured for easy deployment to GitHub Pages. Push to the `main` branch and enable GitHub Pages in your repository settings.
