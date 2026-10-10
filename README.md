# Quizzica — Main Page Starter

A clean-slate, responsive HTML/CSS/JavaScript starter based on the supplied Quizzica main-page reference.

## Run locally
Open `index.html` in a browser. For a local development server, use VS Code Live Server or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload the contents of this folder (not the ZIP itself).
3. In repository **Settings → Pages**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.

## Important functionality note
The page includes working navigation states, PIN validation, and dialog feedback. Joining a live game and creating/saving quizzes require a backend (for example, Firebase) and are represented as integration points; this starter does not pretend to connect to a live game server.

## Files
- `index.html` — page structure
- `styles.css` — visual styling and responsive layout
- `script.js` — interactions
- `assets/pixel-night-scene.jpg` — scenery crop derived from the supplied reference image
