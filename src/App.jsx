import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
import CustomCircleLoader from "./shared/CustomCircleLoader";
import React from "react";

function App() {



  return (
    <AuthContextProvider>
      <React.Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <CustomCircleLoader />
        </div>
      }>
        <RouterProvider router={routes} />
      </React.Suspense>
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;