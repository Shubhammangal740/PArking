import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./utils/authContext";
import LandingPage from "./pages/landing/landingPage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PageNotImplemented from "./pages/pageEmpty";

import AddNotification from "../src/pages/pageEmpty/AddNotification";
import ViewNotifications from "../src/pages/pageEmpty/ViewNotification";

import DashboardPage from "@/pages/dashboard";
import CommonHeader from "@/Components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlankLayout = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <div className="bg-overlay"></div>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BlankLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/contact",
          element: <main>Contact Us</main>,
        },
        {
          path: "/services",
          element: <main>Services</main>,
        },
        {
          path: "/about",
          element: <main>About Us</main>,
        },
        // Add Notification Route
        { path: "/add-notification", element: <AddNotification /> },

        // View Notifications Route
        { path: "/view-notifications", element: <ViewNotifications /> },
        {
          path: "*",
          element: <PageNotImplemented />,
        },
      ],
    },
  ]);

  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     // Generate Token
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BOtICGIpUyQatIBt93DteJijVBJub2UyMVdEVB7WSHmrju2qk1xRCQ36KGzdqtw4NpPANw3WCMGdsSjtsaJOFGg",
  //     });
  //     console.log("Token Gen", token);
  //     // Send this token  to server ( db)
  //   } else if (permission === "denied") {
  //     alert("You denied for the notification");
  //   }
  // }

  // useEffect(() => {
  //   // Req user for notification permission
  //   requestPermission();
  // }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
