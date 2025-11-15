import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import NotAuthorized from "../pages/NotAuthorized";
import { ProtectedRoute, PublicRoute } from "../components/ProtectedRoute";

const EazyRefund = React.lazy(() => import("../pages/EazyRefund"));
const Advertising = React.lazy(() => import("../pages/Advertising"));
const AutoTravels = React.lazy(() => import("../pages/Auto&Travels"));
const CleaningMaintainance = React.lazy(() => import("../pages/Cleaning&Maintenance"));
const ManagementFees = React.lazy(() => import("../pages/ManagementFees"));
const Repairs = React.lazy(() => import("../pages/Repairs"));
const Supplies = React.lazy(() => import("../pages/Supplies"));
const Utilities = React.lazy(() => import("../pages/Utilities"));
const LandScapings = React.lazy(() => import("../pages/LandScapings"));
const ActivityLog = React.lazy(() => import("../pages/ActivityLog"));
const GuestRegistrationForm = React.lazy(() => import("../pages/GuestRegistrationForm"));
const Login = React.lazy(() => import("../pages/Login"));

export const routes = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/not-authorized",
        element: <NotAuthorized />,
      },
    ]
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayouts />,
        children: [
          { path: "/", element: <EazyRefund /> },
          { path: "/advertising", element: <Advertising /> },
          { path: "/auto&travels", element: <AutoTravels /> },
          { path: "/cleaningandmaintainces", element: <CleaningMaintainance /> },
          { path: "/managementfees", element: <ManagementFees /> },
          { path: "/repairs", element: <Repairs /> },
          { path: "/supplies", element: <Supplies /> },
          { path: "/utilities", element: <Utilities /> },
          { path: "/landscaping", element: <LandScapings /> },
          { path: "/activitylog", element: <ActivityLog /> },
          { path: "/guestregistrationform", element: <GuestRegistrationForm /> },
        ],
      }
    ]
  },
]);
