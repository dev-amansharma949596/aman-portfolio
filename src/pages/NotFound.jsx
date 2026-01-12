import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found.</p>
      <Link className="mt-6 inline-block underline" to="/">
        Go home
      </Link>
    </main>
  );
}
