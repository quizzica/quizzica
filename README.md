# Samica — Pixel Quiz Game

A retro purple pixel-art quiz website with a working quiz editor and host/player flows.

## Run it

1. Extract the ZIP.
2. Open `dwa-main/index.html` in a modern browser, or serve the folder with a static web server.
3. Choose **Create** to write a quiz, select a host avatar/name, and open a PIN lobby.
4. Open the same site in another tab/window in the same browser profile and enter the PIN to join as a player.
5. In the lobby, test the player roster, chat, quick reactions, and host Start Game button. Answer questions as a player and advance them as the host.

## Included functionality

- Host quiz creation with title, add/remove question controls, four answer options, and correct-answer selection
- Six-digit game PIN generated when the host finishes quiz setup
- Avatar selection and custom display names for host and players
- Lobby roster, host marker, chat, and quick emoji reactions
- Host-controlled question progression, player answer submission, and final scoreboard
- Local storage synchronization between tabs/windows in the same browser profile
- Responsive layouts and retro purple pixel-inspired UI

## Important multiplayer note

This version is a functional frontend prototype. Game state uses browser `localStorage`, so the host and players can sync across tabs/windows that share the same browser profile. GitHub Pages alone cannot provide shared live game state between separate devices or browsers. For remote multiplayer, connect a realtime backend such as Firebase Realtime Database/Firestore or Supabase Realtime and add appropriate security rules before publishing publicly.

The avatar selector currently uses a set of emoji characters styled as retro character tiles. Replace these with licensed sprite assets if you have the original sprite sheet.
