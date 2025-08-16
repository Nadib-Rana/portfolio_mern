import { Link } from "react-router-dom";

export default function AuthLayout({ children, title, subtitle }: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
            <span className="text-xl">🔐</span>
          </div>
          <h1 className="heading">{title}</h1>
          {subtitle && <p className="subtle mt-1">{subtitle}</p>}
        </div>
        <div className="card">
          {children}
        </div>

        <div className="mt-4 text-center text-sm text-slate-300">
          <Link to="/login" className="link mr-3">Login</Link>
          <span className="opacity-50">•</span>
          <Link to="/signup" className="link ml-3">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
