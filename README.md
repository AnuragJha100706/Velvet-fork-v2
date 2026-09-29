# The Velvet Fork — Haute Cuisine & Luxury Dining Experience

> **Academic Course:** Advanced Web Technology (AWT) — Semester Mini-Project  
> **Founder & Executive Chef:** Anurag Jha  
> **Tech Stack:** HTML5 • CSS3 (Custom Variables) • JavaScript (ES6+) • Bootstrap 5.3.3 • Python Flask REST API

---

## 🌟 Executive Summary

**The Velvet Fork** is an end-to-end luxury dining web application designed for a premier fine-dining establishment. Combining Michelin-level aesthetic elegance with cutting-edge web technologies, the application delivers a seamless digital guest journey—from discovering artisanal menus and wine pairings to reserving tables on an interactive SVG floor plan, splitting dining bills, and accessing personalized VIP passes.

The system is engineered with a **Dual-Tier Resilient Architecture**: a rich client-side frontend powered by Vanilla JavaScript and Bootstrap 5, backed by a lightweight Python Flask REST API on port `4000`, reinforced by an **offline-first local fallback** so the application operates seamlessly even in offline or network-constrained lab demonstration environments.

---

## 🚀 Key Feature Modules

### 1. 🗺️ Interactive Visual Floor Plan & Seating Matrix (`reservation.html`)

- **Dynamic Seating Grid:** Scalable SVG floor plan visualizing **Dining Hall**, **Terrace Garden**, and **VIP Luxury Suites**.
- **Real-time State Management:** Tables dynamically reflect `Available`, `Selected`, or `Reserved` states.
- **Bi-Directional Form Sync:** Selecting a table automatically feeds table ID, tier, and guest capacity into the reservation booking form and updates estimated pricing.

### 2. 🎶 Native Web Audio API Lounge Synthesizer (`main.js`)

- **Zero-Asset Procedural Audio:** Rather than streaming bandwidth-heavy external MP3 files, the app synthesizes warm, soothing restaurant lounge acoustics in real time using the native browser HTML5 `AudioContext`.
- **Custom Gain & Oscillator Nodes:** Implements smooth gain ramps, chord progression intervals, and respectful browser autoplay policies.

### 3. 🍷 Virtual Sommelier & Chef's Mystery Dish (`menu.html`)

- **Sommelier Wine Pairing Engine:** Evaluates selected dishes (Wagyu, Truffle Risotto, Scallops) and recommends curated vintage wines with tasting notes.
- **Interactive Mystery Card:** An interactive mystery dish with animated scratch-and-reveal mechanics to delight prospective diners.

### 4. 🛍️ Pre-Order Tasting Tray & Party Bill Splitter (`menu.html`)

- **Offcanvas Dynamic Cart:** Allows diners to curate multi-course tasting trays before arriving at the restaurant.
- **Group Dining Bill Splitter:** Calculates per-person shares including configurable gratuity/service charges and taxes in real time.

### 5. 🤖 Luxury AI Concierge Assistant (`index.html`, all pages)

- **Interactive Heuristic Chatbot:** Floating concierge widget providing instant recommendations on dress codes, signature dishes, private event bookings, and valet parking.

### 6. 🎟️ Printable VIP Dining Pass & Voucher (`reservation.html`)

- **Print Media Optimization:** Upon booking confirmation, generates a high-resolution printable VIP dining pass complete with booking reference code, date/time stamp, and QR pass layout styled via CSS `@media print`.

### 7. 🌓 Fluid Theme Engine (Velvet Ivory & Noir Dark Mode)

- **CSS Custom Properties (`styles.css`):** Fluid transition between **Warm Ivory/Velvet Crimson** (Day mode) and **Deep Noir Gold** (Night mode) using CSS tokens and Bootstrap 5 theme attributes.

### 8. 🛡️ User Authentication & Profile Suite (`login.html`, `profile.html`)

- Secure client-server user registration and login with password hashing (`werkzeug.security`).
- Guest profile dashboard displaying past reservations, dietary preferences, and saved favorite dishes.

---

## 📂 Project Directory Structure

```text
Advance Web Tech project/
├── index.html              # Main Landing & Hero Showcase
├── menu.html               # Artisanal Menu, Sommelier & Tasting Tray
├── reservation.html        # Interactive Floor Plan & Booking Engine
├── about.html              # Genesis Story & Founder/Chef Anurag Jha
├── reviews.html            # Verified Guest Reviews & Sentiment Filtering
├── login.html              # Guest Sign-In & Member Registration
├── profile.html            # User Dining Dashboard & Reservation History
├── styles.css              # Custom Luxury Design System & Dark Mode Engine
├── main.js                 # Unified JavaScript Engine, Web Audio & API Bridge
├── menu-data.json          # Artisanal Dish & Wine Catalogue Data
├── restaurant image.webp   # High-Resolution Architectural Cover Imagery
├── README.md               # Project Documentation & Viva Guide
│
├── backend/                # Python Flask REST API
│   ├── app.py              # Flask Application Server (Port 4000)
│   └── data/               # Persistent Data Storage
│       ├── users.json      # Registered User Accounts
│       ├── reservations.json # Booking Records
│       └── feedback.json   # Guest Ratings & Reviews
│
└── pics/                   # Culinary Imagery & Chef Photography
```

---

## ⚙️ Installation & Running the Project

### Prerequisites

- Python 3.8 or higher installed on your system.
- Standard web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Step 1: Install Backend Dependencies

Open your terminal or command prompt and install Flask and Flask-CORS:

```powershell
pip install Flask Flask-Cors Werkzeug
```

### Step 2: Start the Flask Backend Server

Navigate to the project root and launch the backend:

```powershell
python backend\app.py
```

> **Backend Server URL:** `http://127.0.0.1:4000`  
> _(The server creates `users.json`, `reservations.json`, and `feedback.json` automatically in `backend/data/`)._

### Step 3: Start the Frontend Web Server

Open a **second terminal window** in the project root and start Python's built-in HTTP server:

```powershell
python -m http.server 8080
```

### Step 4: Open in Your Browser

Navigate to:
👉 **[http://localhost:8080](http://localhost:8080)**

_(Alternatively, you can open `index.html` directly in your browser or through VS Code Live Server)._

---

## 📡 REST API Documentation

The backend exposes the following RESTful API endpoints on `http://127.0.0.1:4000`:

| Method   | Endpoint                         | Description                             | Request Body / Params                                  |
| :------- | :------------------------------- | :-------------------------------------- | :----------------------------------------------------- | ----------- |
| `POST`   | `/api/register`                  | Register a new guest account            | `{ username, email, password }`                        |
| `POST`   | `/api/login`                     | Authenticate user credentials           | `{ username, password }`                               |
| `GET`    | `/api/user/<username>`           | Fetch profile, reservations & favorites | URL parameter                                          |
| `POST`   | `/api/user/<username>/favorites` | Add or remove a favorite dish           | `{ dish, action: "add"                                 | "remove" }` |
| `POST`   | `/api/user/<username>/update`    | Update email or change password         | `{ email, password }`                                  |
| `POST`   | `/api/reservations`              | Create a new table reservation          | `{ name, phone, email, date, time, people, requests }` |
| `DELETE` | `/api/reservations/<id>`         | Cancel an existing reservation          | Reservation ID                                         |
| `POST`   | `/api/feedback`                  | Submit guest review & star rating       | `{ username, text, rating }`                           |
| `GET`    | `/data/<filename>`               | Serve static JSON records               | Filename                                               |

---

## 🎓 Academic Viva & Presentation Cheat-Sheet

When presenting this project to examiners or professors, highlight these architectural points:

1. **Why use both Flask and `localStorage`?**
   - _"We implemented a Dual-Persistence / Offline-First architecture. When online, the client synchronizes via asynchronous `fetch()` requests with our Flask REST API. If the network drops or the server is unavailable, the application gracefully degrades to `localStorage` caches without breaking user workflow."_

2. **Why use the Web Audio API instead of an `<audio>` tag?**
   - _"The HTML5 Web Audio API creates procedural audio nodes using software synthesis. This eliminates the latency and bandwidth overhead of streaming external audio files and allows dynamic manipulation of frequencies and gain envelopes directly in JavaScript."_

3. **How is the responsive layout structured?**
   - _"The interface uses Bootstrap 5.3.3's 12-column flexbox grid system paired with custom CSS variables. Breakpoint utilities (`col-lg-`, `col-md-`, `col-sm-`) ensure fluid layout adaptation from 320px mobile screens up to 4K displays."_

4. **How are passwords secured?**
   - _"Passwords sent to the Flask backend are hashed using the PBKDF2/SHA-256 algorithm via `werkzeug.security.generate_password_hash`, ensuring plain-text credentials are never saved in the persistent store."_

5. **How does the floor plan synchronization work?**
   - _"Each table SVG node is tagged with data attributes (`data-table-id`, `data-tier`, `data-seats`). An event delegation listener in `main.js` catches clicks, updates active styling classes, and binds the selection directly to the booking form fields in the DOM."_

---

## 🏆 Project Credits

- **Founder & Executive Chef:** Anurag Jha
- **Curated By:** Computer Science & Engineering — Advanced Web Technology Project Team
- **Institution:** Department of Computer Science & Engineering
