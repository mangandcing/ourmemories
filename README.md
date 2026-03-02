# 💕 Mang & Cing — Romantic Website

A private, beautiful multi-page romantic website for **Mang Muan Mung** (Mang) and **Cing Sian Hoih Lian** (Cing).

---

## 🔑 Passwords

| Who | Password | Access |
|-----|----------|--------|
| Anyone | `sweetlove2024` | Full site access (read-only for letters) |
| Mang | `mang2024` | Can write & delete his own letters |
| Cing | `cing2024` | Can write & delete her own letters |

> ⚠️ Change passwords in `index.html` → look for the `PASSWORDS` object.

---

## 📁 File Structure

```
lovesite/
├── index.html          ← Password gate (entry point)
├── home.html           ← Homepage with love counter
├── gallery.html        ← Photo gallery
├── letters.html        ← Love letters
├── timeline.html       ← Your story timeline
├── music.html          ← Music player
├── games.html          ← Fun zone (games & jokes)
├── wishes.html         ← Bucket list & promises
├── css/
│   └── shared.css      ← All styles
├── js/
│   └── shared.js       ← Shared utilities
├── images/             ← 📸 Put your photos here!
│   └── 1.jpg, 2.jpg, 3.png... (up to 100)
└── audio/              ← 🎵 Optional audio folder
```

---

## 📸 Adding Photos

Just drop your photos into the **`images/`** folder and name them:
- `1.jpg`, `2.jpg`, `3.jpg`... (recommended)
- `1.png`, `2.png`... (also works)
- `1.jpeg`, `1.webp`... (also works)

The gallery auto-detects them! No code needed.

You can also upload directly from the Gallery page using the upload button.

---

## 🎵 Adding Music

Go to the **Music** page and either:
1. Click "Upload Audio" to upload MP3/WAV/M4A files
2. Add by entering the filename (e.g., `audio/song.mp3`)
3. Or add a YouTube/web URL

---

## ✏️ Customize Your Start Date

Open `home.html` and find this line:
```js
const START = new Date('2023-01-01T00:00:00');
```
Change it to your real anniversary/start date!

---

## 🌐 Hosting

This is a **pure static website** — no server or database needed!

**Easy free hosting options:**
- **Netlify**: Drag & drop the folder at netlify.com
- **GitHub Pages**: Push to GitHub and enable Pages
- **Vercel**: Connect your GitHub repo

> Note: Data (letters, wishes, timeline events) is saved in the browser's `localStorage` — it persists on the same device/browser. For shared data across devices, you'd need a backend.

---

## 🎨 Features

| Page | What it does |
|------|-------------|
| 🏠 Home | Love counter, quick navigation, random love quotes |
| 📸 Gallery | Photo grid with upload, lightbox viewer, keyboard navigation |
| 💌 Letters | Role-based letter sending, emoji reactions, filtering |
| 🗓️ Timeline | Add memories with emoji markers, alternating layout |
| 🎵 Music | Audio upload & player, playlist management |
| 🎮 Fun Zone | Truth/Dare, Love Calculator, Compliments, Who Said It, Date Wheel, Jokes |
| ⭐ Wishes | Bucket list with categories, completion tracking, progress bar |

---

## 🌙 Dark / Light Mode

Click the **🌙 / ☀️** button in the nav. Preference is saved automatically.

---

Made with 💕 for Mang & Cing
