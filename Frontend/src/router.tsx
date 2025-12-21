import { createBrowserRouter } from "react-router";
import AuthLayout from "./routes/auth/layout";
import SignUp from "./routes/auth/signUp";
import Login from "./routes/auth/login";
import MagicLinkSent from "./routes/auth/magicLink";
import VerifyMagicLink from "./routes/auth/verify"; // 1. Import the new component
import HomePage from "./routes/_index";
import DashboardLayout from "./routes/dashboard/layout";
import DashboardHomePage from "./routes/dashboard/page";
import DashboardDiscoverPage from "./routes/dashboard/discover";
import DashboardProfilePage from "./routes/dashboard/profile";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHomePage /> },
      { path: "discover", element: <DashboardDiscoverPage /> },
      { path: "profile", element: <DashboardProfilePage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "magic-link", element: <MagicLinkSent /> },
      { path: "verify-magic-link", element: <VerifyMagicLink /> }, // 2. Add the route definition
    ],
  },
]);