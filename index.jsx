/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */
import App from "./App"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(<App/>)