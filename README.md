# Clinikally Product Search Autocomplete

A modern React application for searching products with autocomplete, advanced UI, and a beautiful header. Built for the Clinikally assignment.

## Features
- **Live Product Search** with debounced API requests
- **Autocomplete Suggestions** with pagination
- **Loading and Error States**
- **Responsive, Modern UI**
- **Company Branding** with logo and custom header
- **Color-coded Ratings and Stock Status**

## Project Structure
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── clinikally-logo.png
│   ├── components/
│   │   └── Autocomplete/
│   │       ├── Autocomplete.js
│   │       └── Autocomplete.css
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup & Installation
1. **Clone the repository** (if not already):
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>/frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage
- Type at least 2 characters in the search bar to see product suggestions.
- Use the clear (×) button to reset your search.
- Click "Load More" to fetch additional results.
- Enjoy a responsive and visually appealing UI!

## Customization
- **Logo:** Replace `src/assets/clinikally-logo.png` with your own logo if desired.
- **API:** Update `src/services/api.js` to point to your own product API if needed.
- **Styling:** All main styles are in `src/components/Autocomplete/Autocomplete.css` and `src/App.css`.

## Folder Details
- `src/components/Autocomplete/` — Main autocomplete component and styles
- `src/assets/` — Company logo and other static assets
- `src/hooks/` — Custom React hooks (e.g., debounce)
- `src/services/` — API service for product search

## License
This project is for educational/demo purposes. Please contact the author for production/commercial use.

---

**Made with ❤️ for the Clinikally assignment.**
