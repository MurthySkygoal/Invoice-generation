import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";

function App() {



  return (
    <AuthContextProvider>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;