import { createBrowserRouter } from "react-router";
import AuthLayout from "./routes/auth/layout";
import SignUp from "./routes/auth/signUp";
import Login from "./routes/auth/login";
import MagicLinkSent from "./routes/auth/magicLink";
import HomePage from "./routes/_index";
// import Dashboard from "./routes/dashboard/index" 

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  // { path: "/dashboard", element: <Dashboard /> }, 
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