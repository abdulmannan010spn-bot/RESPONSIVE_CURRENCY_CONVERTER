# 💱 Currency Converter

A lightweight, responsive web application that fetches real-time currency exchange rates and dynamically updates country flags based on the selected currencies[cite: 3, 4].

---

## ✨ Features

- **Real-Time Exchange Rates:** Fetches live conversion data via the Free Currency API.
- **Dynamic Flag Indicators:** Automatically updates country flags when a currency is selected using Flags API.
- **Global Currency Coverage:** Supports over 100 world currencies mapped to their respective country codes.
- **Responsive Interface:** Designed with custom styling, smooth transitions, and mobile-friendly breakpoints[cite: 2].
- **Fallback Validation:** Automatically resets empty or negative input values to `1`.

---

## 🛠️ Built With

- **HTML5** & **CSS3** (Custom layout, CSS Grid background, Flexbox)[cite: 2, 3]
- **Vanilla JavaScript** (ES6+, `fetch` API, Async/Await, DOM manipulation)[cite: 4]
- **[Free Currency API](https://github.com/fawazahmed0/exchange-api)** - Currency conversion endpoint[cite: 4]
- **[Flags API](https://flagsapi.com/)** - Country flag icons[cite: 4]
- **[Font Awesome](https://fontawesome.com/)** - UI icons[cite: 3]
- **[Google Fonts](https://fonts.google.com/specimen/Comfortaa)** - Typography (*Comfortaa*)[cite: 2]

---

## 📁 Project Structure

```text
├── index.html        # Markup structure & external CDN links
├── index.css         # Styling, theme variables & media queries
├── index.js          # API integration, DOM logic & event handlers
└── codes.js          # ISO currency-to-country code mapping dictionary
