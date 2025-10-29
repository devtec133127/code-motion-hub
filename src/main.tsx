import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {LaunchPhaseBanner} from "@/components/LaunchPhaseBanner.tsx";
import UnderConstructionBanner from "@/components/UnderConstructionBanner.tsx";

createRoot(document.getElementById("root")!).render(
   <>
       <UnderConstructionBanner />
     <App />
   </>
);
