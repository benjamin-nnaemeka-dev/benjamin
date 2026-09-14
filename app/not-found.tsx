import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a192f] px-6 text-center text-slate font-sans selection:bg-[#233554] selection:text-[#ccd6f6]">
      <h1 className="font-mono text-7xl sm:text-9xl font-bold text-green">
        404
      </h1>
      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-lightest">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md text-sm text-slate">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded border border-green px-7 py-3 font-mono text-sm text-green hover:bg-green/10 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
