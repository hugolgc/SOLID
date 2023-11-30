import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppComponent } from "./app/app.component";

// const container = document.getElementById("root")!;

createRoot(document.body).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>
);
