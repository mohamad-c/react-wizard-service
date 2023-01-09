import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NotificationsProvider } from '@mantine/notifications';


const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ colorScheme: "dark", fontFamily: "Poppins" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <QueryClientProvider client={client}>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
