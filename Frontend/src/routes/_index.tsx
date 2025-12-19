import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Axia Hackathon - Home</title>
        {/* If using SVG as favicon, ensure type is set correctly */}
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
      </Helmet>
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
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-brand-primary/40 text-white rounded-md hover:bg-brand-primary/70"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
