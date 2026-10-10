# Quizzica — pixel-art quiz prototype

A responsive, browser-based Kahoot-style quiz interface inspired by the supplied screenshot. Includes avatar selection, a sample lobby and PIN, multiple-choice questions, countdown timer, scoring/streaks, reactions, results bars, settings, and replay.

## Run it

Open `index.html` in a modern browser. If the browser restricts local assets or clipboard access, run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Important multiplayer note

This version is a functional front-end prototype. The lobby roster and game PIN are sample data; it does not yet synchronize separate players' browsers. For real hosted multiplayer, connect the original Firebase project (Authentication + Realtime Database or Firestore) and implement room creation, joining, host controls, synchronized question timers, answers, and reactions. No Firebase credentials or repository source were included with this screenshot-only request, so none were changed or fabricated.

## Assets

Avatar tiles and the moonlit landscape are crops from the screenshot you supplied, so the pixel-art models are retained rather than substituted with unrelated illustrations.
