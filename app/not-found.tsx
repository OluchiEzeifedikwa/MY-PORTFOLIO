import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050510]">
      <div className="text-center font-mono">
        <p className="text-cyan-400 text-6xl font-bold mb-4">404</p>
        <p className="text-slate-500 mb-6">Page not found</p>
        <Link href="/" className="text-cyan-400 hover:underline text-sm">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
