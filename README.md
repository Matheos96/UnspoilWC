# UnspoilWC ⚽ 🚫

**UnspoilWC** is a lightweight Google Chrome extension designed to keep the excitement alive during the World Cup 2026. It instantly hides match scores and dynamic spoiler elements on the FIFA.com tournament highlights pages, replacing them with a neutral `?` before the page even finishes rendering. 

Now you can watch the highlights completely spoiler-free!


## Features

* **Instant Spoiler Blocking:** Injects CSS at `document_start` to hide scores before they flash on screen.
* **Smart Replacing:** Replaces score numbers with a clean `?` layout without breaking the website's original design.
* **Targeted Hiding:** Automatically clears out spoiler-heavy elements like the "Storyteller" match summary sections and unwanted background banners.
* **Quick Navigation:** Features a minimalist dark-mode browser popup with a direct link to the official [FIFA World Cup 2026 Highlights](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/highlights) page.


## Installation & Setup

Since this extension is optimized for your personal use and isn't hosted on the Chrome Web Store (yet?), you can easily install it manually using Chrome's Developer Mode.

### 1. Download the Project Source
**Option A: Download the ZIP file (Easiest)**

1. Click the green **Code** button near the top right of the repository page.

2. Select **Download ZIP** from the dropdown menu.

3. Locate the downloaded file (usually named `UnspoilWC-main.zip`), extract/unzip it entirely, and place the resulting `UnspoilWC-main` folder somewhere convenient on your computer.

**Option B: Clone via Terminal (For Git Users)**

Open your terminal (or Command Prompt) and run the following commands to clone the repository locally and navigate into the project folder:

```bash
git clone --depth=1 -b main https://github.com/Matheos96/UnspoilWC.git
```

### 2. Enable Developer Mode in Chrome
Open Google Chrome.

In the URL bar, type chrome://extensions/ and press Enter.

In the top-right corner of the Extensions page, toggle the Developer mode switch to ON.

### 3. Load the Extension
In the top-left corner of the page, click the Load unpacked button.

In the file picker that appears, navigate to and select your UnspoilWC folder (the directory containing your manifest.json file).

🎉 You're all set! The UnspoilWC icon will now appear in your extension toolbar. Pin it for quick access to the highlights page navigation button.