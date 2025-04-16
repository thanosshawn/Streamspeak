# Streamspeak
A clean  , real-time discussion website for movies and web series.
Each title gets its own discussion room with live chat, reactions, and topic threads.

Feature | Description
Title Directory | Homepage with grid/list of all new releases (auto-fetched or manual input)
Dedicated Chatroom per Title | Real-time chat for each movie/series
Threaded Discussions (optional) | Users can start a mini-thread for a scene/episode
Reactions | Emoji or vote reactions to messages or scenes
Usernames or Guest Avatars | Light user identity system
Search Bar | Quickly find a movie or show


#🛠️ Step-by-Step Build Plan
1. Homepage: List of Titles
Show tiles/cards of current trending movies & shows.

Each links to /chat/{title-slug}.

Add a “+ Add New Title” form (admin-only or public).

2. Title-Specific Chatroom
When user visits /chat/dunki-2024, connect them to real-time chat stream for "Dunki".

Display message feed (scrollable), message input box.

Optional: Show emojis or reactions.

3. Realtime Chat Logic
Option A: Firebase Firestore + Realtime DB

Super easy: just use Firebase SDK to sync data in realtime.

Messages update instantly on all screens.

Option B: WebSocket (Custom Backend)

Set up a Node.js WebSocket server.

Connect client to ws://server/chatroom/dunki-2024.

4. Nice-to-Have Extras
Allow spoilers to be hidden (click to reveal).

Dark mode switch 🌙.

“Top comments” with most reactions.

Live count of people currently viewing each room.

🎨 UI Style Ideas
Netflix-like grid on homepage.

Chatbox like WhatsApp/Telegram: clean, bubble-style messages.

Use emojis, avatars, reactions.

Option for episode-wise sub-rooms (e.g., “Mirzapur S3 E1”).
