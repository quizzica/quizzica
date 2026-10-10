# Samica — Pixel Quiz

A purple pixel-art quiz game with the Samica lobby, avatar sprites, quiz editor, live question screen, reactions, countdown, vote counts, and scoreboard.

## Firebase project reused

This version reuses the Firebase web configuration supplied in `Quizzica-main (1).zip` (`quizzica-mgy`) and imports it from `firebase-config.js`. Realtime Database records are stored at `games/{PIN}`. `firebase.js` is also included from the original repository.

## Before testing online

1. In the Firebase console, open the `quizzica-mgy` project.
2. Confirm **Realtime Database** is enabled and its URL matches `firebase-config.js`.
3. Check **Realtime Database → Rules**. Rules must allow the needed reads and writes for `games/{PIN}` or creating/joining games will fail. Do not publish unrestricted public write rules on a public site.
4. Upload the contents of this folder to GitHub Pages, keeping `assets/`, `firebase-config.js`, `firebase.js`, `script.js`, and `styles.css` together.
5. Open the hosted site on two separate devices and test: create a quiz, copy the PIN, join from the second device, start the game, answer, send reactions, and advance to results.

## Multiplayer and security notes

The host/player flow uses Firebase Realtime Database reads, writes, and live snapshots for PIN lookup, lobby roster/chat/reactions, question state, answers, and results. It only works if the existing Firebase database is enabled and its rules allow these operations. The game logic and scoring remain client-side in this prototype, so players could tamper with data. Before a public launch, add Firebase Authentication and restrictive rules or trusted server/Cloud Functions validation. Never put a Firebase service-account private key in browser code.

## Preview

You can open `index.html` to inspect the design. For actual Firebase testing, serve the folder over HTTP(S) (such as GitHub Pages) and check the browser console if Firebase reports a permission or network error.
