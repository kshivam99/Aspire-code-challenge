import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { CardProvider } from "./context/CardContext";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CardProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </CardProvider>
  </React.StrictMode>
);
