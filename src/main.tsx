import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HERO_IMAGE_URL } from "./lib/cloudinary";
import "./style.css";
import App from "./App.tsx";

// Dispara o download do hero antes do React montar (além do preload no HTML).
const heroPreload = new Image();
heroPreload.fetchPriority = "high";
heroPreload.src = HERO_IMAGE_URL;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
