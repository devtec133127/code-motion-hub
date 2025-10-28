import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const UnderConstructionBanner = () => (
  <div
    style={{
      backgroundColor: "#ffcc00",
      color: "#000",
      textAlign: "center",
      padding: "0.5rem",
      fontWeight: "bold",
    }}
  >
    ⚠️ Diese Seite befindet sich noch im Aufbau!
  </div>
);

createRoot(document.getElementById("root")!).render(
   <>
     <UnderConstructionBanner />
     <App />
   </>
);
