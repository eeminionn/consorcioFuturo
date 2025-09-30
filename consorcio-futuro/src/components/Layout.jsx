import { Outlet, Link, useLocation } from "react-router-dom";
import { RocketLaunch } from "@phosphor-icons/react";

export default function Layout(){
  const { pathname } = useLocation();
  const NavLink = ({to,children}) => (
    <Link to={to}
      className={`px-3 py-2 rounded-xl text-sm font-semibold transition
      ${pathname===to ? "bg-white/20 text-white" : "text-white/80 hover:text-white"}`}>
      {children}
    </Link>
  );

  return (
    <div className="min-h-screen gradient-hero">
      <header className="sticky top-0 z-50 bg-brand/90 backdrop-blur text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <RocketLaunch size={26} weight="fill" className="text-mint" />
          <span className="font-display text-lg">Consorcio <b>FUTURO</b></span>
          <nav className="ml-auto flex gap-2">
            <NavLink to="/consorcioFuturo">Padre</NavLink>
            <NavLink to="/vistaHijo">Niño</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl p-1 bg-gradient-to-br from-peach/40 via-sky/40 to-lilac/40">
        <div className="rounded-3xl bg-white/70 backdrop-blur border border-white/50 p-8">
        <Outlet />
        </div>
        </div>
      </main>
      <footer className="text-center py-8 text-slate-600 text-sm">
        © Consorcio FUTURO — prototipo académico
      </footer>
    </div>
  );
}
