import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Apex Collective</h1>
      <div className="flex gap-4">
        <Link
          to="/auth/login"
          className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Login
        </Link>
        <Link
          to="/auth/signup"
          className="px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary/70"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
