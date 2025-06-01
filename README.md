# Clinikally Product Search Autocomplete

A modern React application for searching products with autocomplete, advanced UI, and a beautiful header. Built for the Clinikally assignment.

## My Thought Process & Approach

As the creator of this project, my goal was to deliver a clean, modern, and user-friendly product search experience. Here's how I approached the assignment:

- **Project Structure:** I organized the codebase into clear folders for components, hooks, services, and assets to keep things modular and maintainable.
- **API Integration:** I used a `.env` file for the API base URL, making it easy to switch between different backends or mock APIs. The API service is isolated for easy updates.
- **Autocomplete Logic:** I implemented debounced search to avoid unnecessary API calls and provide a smooth user experience. Pagination is supported for large result sets.
- **UI/UX:** I focused on a visually appealing, responsive design with clear loading, error, and empty states. The header features company branding and a gradient heading for a professional look.
- **Customization:** The logo, API, and styles are all easy to update. The README provides clear setup and customization instructions.
- **Error Handling:** The app gracefully handles API errors and edge cases, always providing feedback to the user.

This approach ensures the app is robust, easy to use, and simple to extend or adapt for future needs.

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

### Setup & Installation
1. **Clone the repository** (if not already):
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>/frontend
   ```
2. **Create a `.env` file** in the `frontend` directory with the following content:
   ```env
   REACT_APP_BASE_URL=https://dummyjson.com/products
   ```
   - **Do not use quotes** around the URL.
   - If you use a different API, update the URL accordingly.
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
5. **Open in your browser:**
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

