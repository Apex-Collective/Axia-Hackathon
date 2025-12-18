import { createBrowserRouter } from "react-router";
import AuthLayout from "./routes/auth/layout";
import SignUp from "./routes/auth/signUp";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [{ path: "signup", element: <SignUp /> }],
  },
]);
