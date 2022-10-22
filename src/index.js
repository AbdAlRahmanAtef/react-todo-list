import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodosProvider } from "./context/todoContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
      <ToastContainer
        className='toast'
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </TodosProvider>
  </React.StrictMode>
);
