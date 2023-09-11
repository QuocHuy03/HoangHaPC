import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading/index.jsx";
import { AppContextProvider } from "./contexts/AppContextProvider.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./stores/app.store.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
