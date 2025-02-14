import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.tsx";
import { store } from "./state/store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
