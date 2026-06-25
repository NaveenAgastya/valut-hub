# Person B Progress Log

## 2026-06-25 (Week 1, Day 1)

### What I Did Today

#### 1. Project Setup
- [x] Created React + TypeScript project with Vite (`npm create vite@latest`)
- [x] Installed dependencies (`npm install`)
- [x] Installed React Router (`npm install react-router-dom`)
- [x] Attempted Tailwind CSS install (encountered issues, switched to inline styles for now)

#### 2. DownloadPage Component
- [x] Created `src/pages/DownloadPage.tsx`
- [x] Built file metadata interface (TypeScript): originalName, mimeType, sizeBytes, isEncrypted, expiresAt, downloadCount
- [x] Implemented `formatFileSize()` helper function (bytes → KB/MB/GB)
- [x] Added loading state with `useState(true)` and `useEffect` with `setTimeout` to simulate API call
- [x] Added error state handling (ready for real API errors)
- [x] Used `useParams&lt;{ token: string }&gt;()` to read token from URL (`/file/:token`)
- [x] Conditional rendering: loading spinner → error message → file info card
- [x] Displayed file info: name, type, size, expiration date, encryption status, download count
- [x] Conditionally showed password input only when `isEncrypted` is true
- [x] Added "Download File" button (placeholder for now, no real download yet)
- [x] Displayed token at bottom for debugging

#### 3. App.tsx Router Setup
- [x] Set up `BrowserRouter` and `Routes`
- [x] Added route for `/file/:token` pointing to DownloadPage
- [x] Added placeholder route for `/` (home page, waiting for Person A's UploadPage)

#### 4. Styling Journey
- [x] Started with Tailwind classes (`bg-gray-100`, `rounded-lg`, etc.)
- [x] Hit Tailwind generation issue (classes not applying)
- [x] Used `body { background: hotpink }` test to verify CSS file loads
- [x] Learned about browser caching (Ctrl+Shift+R for hard refresh)
- [x] Switched to inline `style={{}}` objects when Tailwind failed
- [x] Built clean design with plain CSS-in-JS

#### 5. Git & GitHub
- [x] Initialized Git repository (`git init`)
- [x] Created GitHub repository `vault-hub-lite`
- [x] Connected local repo to GitHub (`git remote add origin ...`)
- [x] Created `.gitignore` (node_modules, .env, dist folders)
- [x] Created project folder structure (frontend/, backend/, docs/)
- [x] This is my FIRST COMMIT

### What I Learned

#### React Concepts
- **JSX**: Writing HTML-like code inside JavaScript files
- **Components**: Functions that return UI (DownloadPage is a component)
- **Props**: Not used yet, but I know they're for passing data parent→child
- **State (`useState`)**: Data that changes and makes React re-render the page
  - `const [file, setFile] = useState(null)` — starts as null, becomes data later
  - `const [loading, setLoading] = useState(true)` — starts true, becomes false when data loads
- **Effects (`useEffect`)**: Run code when something happens (like page load)
  - Empty array `[]` means "run once when component mounts"
  - Used `setTimeout` to simulate API delay (1 second)
- **useParams**: React Router hook that reads URL parameters
  - `/file/abc123` → `useParams()` gives `{ token: "abc123" }`
- **Conditional Rendering**: Show different UI based on state
  - `if (loading) return &lt;Spinner /&gt;`
  - `if (error) return &lt;ErrorMessage /&gt;`
  - Otherwise return the main page

#### TypeScript Concepts
- **Interfaces**: Define the shape of objects
  ```typescript
  interface FileMetadata {
    originalName: string;   // must be text
    sizeBytes: number;      // must be a number
    isEncrypted: boolean;   // must be true/false
  }


  