import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link href="/" className="btn btn-primary mt-6">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
