import { createBrowserRouter } from "react-router";
import AuthLayout from "./routes/auth/layout";
import SignUp from "./routes/auth/signUp";
import Login from "./routes/auth/login";
import MagicLinkSent from "./routes/auth/magicLink";
import HomePage from "./routes/_index";
import DashboardLayout from "./routes/dashboard/layout";
import DashboardHomePage from "./routes/dashboard/page";
import DashboardDiscoverPage from "./routes/dashboard/discover";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHomePage /> },
      { path: "discover", element: <DashboardDiscoverPage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "magic-link", element: <MagicLinkSent /> },
    ],
  },
]);
