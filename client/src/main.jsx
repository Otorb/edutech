import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from 'react-auth-kit'
import { store } from "./store/Auth/store.js";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {storeRedux, persistor} from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProvider store={store}>
  <Provider store={storeRedux}>
  <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
      </PersistGate>
  </Provider>
  
</AuthProvider>
     
   
);
