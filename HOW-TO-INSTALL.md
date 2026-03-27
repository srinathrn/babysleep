# Baby Sleep Helper — APK Installation Guide

## What you have
Three files that make up your complete app:
- `index.html` — the full app (sounds, routine, tips)
- `manifest.json` — tells Android it's an installable app
- `sw.js` — makes it work fully offline

---

## Step 1: Host the app free on GitHub Pages (5 minutes)

1. Go to **github.com** and create a free account (if you don't have one)
2. Click **"New repository"** → name it `babysleep` → set to **Public** → click Create
3. Click **"uploading an existing file"**
4. Drag and drop all 3 files: `index.html`, `manifest.json`, `sw.js`
5. Click **"Commit changes"**
6. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
7. Click Save. After ~2 minutes your app is live at:
   `https://YOUR-USERNAME.github.io/babysleep`

Test it in your phone browser first — it should open and work fully.

---

## Step 2: Generate your APK with PWABuilder (3 minutes)

1. On your computer, go to **pwabuilder.com**
2. Paste your GitHub Pages URL and click **Start**
3. PWABuilder will scan your app. Click **Package for stores**
4. Choose **Android** → click **Generate package**
5. Keep default settings → click **Download** to get your `.zip` file
6. Unzip it — inside you'll find `babysleep.apk`

---

## Step 3: Install the APK on your Android phone

**On your phone:**
1. Go to **Settings → Apps → Special app access → Install unknown apps**
2. Find your browser or Files app → toggle **Allow from this source**
3. Transfer the `.apk` to your phone (email it to yourself, or use Google Drive / USB)
4. Open the `.apk` file from your Files app
5. Tap **Install** → **Done**

The app now appears on your home screen like any normal app.
Tap it anytime — no internet needed, no Claude login needed!

---

## Tips

- **Screen stays on** while sounds play (Wake Lock is built in)
- Works fully **offline** after first load
- You can also just use it as a **PWA** directly from your browser:
  open the URL in Chrome → tap the 3-dot menu → "Add to Home screen"
  This is the quickest option if you want to skip the APK step.

---

## Need an app icon?

Go to **realfavicongenerator.net**, upload any baby/sleep image,
download the `192x192` and `512x512` PNGs, rename them
`icon-192.png` and `icon-512.png`, and upload them to your GitHub repo.
PWABuilder will then use your icon on the home screen.
