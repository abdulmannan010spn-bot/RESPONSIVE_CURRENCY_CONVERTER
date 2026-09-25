<div align="center">

# 💱 Currency Converter

A lightweight, responsive web application that fetches real-time currency exchange rates and dynamically updates country flags based on the selected currencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

Currency Converter lets you convert between over 100 world currencies with live exchange rates, while automatically swapping the country flag next to each currency dropdown as you change your selection. It's built entirely with vanilla JavaScript — no frameworks, no build step — and pulls data from free, public APIs.

## ✨ Features

- 💹 **Real-Time Exchange Rates** — fetches live conversion data via the Free Currency API
- 🏳️ **Dynamic Flag Indicators** — automatically updates country flags when a currency is selected using Flags API
- 🌍 **Global Currency Coverage** — supports over 100 world currencies mapped to their respective country codes
- 📱 **Responsive Interface** — designed with custom styling, smooth transitions, and mobile-friendly breakpoints
- 🛡️ **Fallback Validation** — automatically resets empty or negative input values to `1`

## 🚀 Getting Started

### Prerequisites

Just a web browser and an internet connection (the app relies on live API calls). No installation or build step required.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/currency-converter.git

# Navigate into the project directory
cd currency-converter

# Open the app directly
open index.html        # macOS
start index.html         # Windows
xdg-open index.html       # Linux
```

Or serve it with any static file server:

```bash
npx serve .
```

Then visit the local address it prints (e.g. `http://localhost:3000`).

## 📁 Project Structure

```
├── index.html        # Markup structure & external CDN links
├── index.css         # Styling, theme variables & media queries
├── index.js          # API integration, DOM logic & event handlers
└── codes.js          # ISO currency-to-country code mapping dictionary
```

## 🧠 How It Works

1. Select a "from" and "to" currency from the dropdowns — each populated from the ISO currency-to-country mapping in `codes.js`.
2. Enter an amount to convert (invalid, empty, or negative values automatically reset to `1`).
3. On submit, `index.js` calls the Free Currency API to fetch the latest exchange rate between the two selected currencies.
4. The converted amount is calculated and displayed.
5. Each dropdown's associated flag icon updates automatically via the Flags API, matching the selected currency's country code.

## 🛠️ Tech Stack

| Layer         | Technology                                                                 |
|----------------|------------------------------------------------------------------------------|
| Structure      | HTML5                                                                       |
| Styling        | CSS3 (custom layout, CSS Grid background, Flexbox)                          |
| Logic          | Vanilla JavaScript (ES6+, `fetch` API, async/await, DOM manipulation)       |
| Exchange Data  | [Free Currency API](https://github.com/fawazahmed0/exchange-api)             |
| Flag Icons     | [Flags API](https://flagsapi.com/)                                          |
| UI Icons       | [Font Awesome](https://fontawesome.com/)                                     |
| Typography     | [Google Fonts](https://fonts.google.com/specimen/Comfortaa) (*Comfortaa*)   |

## 🗺️ Possible Improvements

- [ ] Cache exchange rates locally to reduce redundant API calls
- [ ] Add a "swap currencies" button
- [ ] Add historical rate charts
- [ ] Add offline fallback / error state when the API is unreachable
- [ ] Add a dark mode toggle

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/currency-converter/issues) or open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 💱 and vanilla JavaScript
</div>
