export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Aman. All rights reserved.
      </div>
    </footer>
  );
}
