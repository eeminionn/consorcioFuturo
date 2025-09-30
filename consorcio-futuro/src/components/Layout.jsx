// src/components/Layout.jsx
import { Outlet, NavLink, Link } from "react-router-dom";

/* --- Píldora de navegación (Padre/Niño) --- */
function Tab({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "relative px-5 h-10 rounded-full font-semibold transition-all duration-300",
          "flex items-center justify-center",
          isActive
            ? "bg-white/90 text-brand shadow-sm"
            : "text-white/90 hover:text-white hover:bg-white/10"
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {/* brillo sutil cuando está activo */}
          <span
            className={[
              "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full transition-all",
              isActive ? "bg-mint/80 opacity-100" : "opacity-0"
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  );
}

/* --- Header con glassmorphism, degradé y CTA a Consorcio --- */
function Header() {
  const padrePath = "/consorcioFuturo";
  const hijoPath = "/vistaHijo";

  return (
    <header className="sticky top-0 z-50">
      {/* Capa base con degradé sutil */}
      <div className="bg-brand">
        <div className="bg-[radial-gradient(1000px_400px_at_30%_-50%,rgba(181,234,234,0.18),transparent),radial-gradient(900px_400px_at_80%_-60%,rgba(205,180,219,0.15),transparent)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="h-16 flex items-center justify-between gap-4 backdrop-blur-md">
              {/* Branding */}
              <Link to={padrePath} className="group flex items-center gap-3">
                {/* ícono mini “cohete” */}
                <svg
                  width="26" height="26" viewBox="0 0 24 24"
                  className="text-mint group-hover:scale-110 transition-transform"
                  fill="currentColor"
                >
                  <path d="M12 2c3.5 0 6 2.5 6 6 0 3.2-1.8 6.4-4.5 8.7-.7.6-1.5 1.1-2.3 1.5-.8-.4-1.6-.9-2.3-1.5C7.8 14.4 6 11.2 6 8c0-3.5 2.5-6 6-6zm0 3.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z" />
                  <path d="M8.5 17.2c-2.1.5-3.6 1.7-4.5 3.6 2-.8 3.5-.7 4.7.2 1-1.2 1.5-2.6 1.6-4.1-.6.3-1.2.4-1.8.3z" />
                </svg>
                <div className="leading-tight">
                  <div className="text-white font-semibold tracking-wide">
                    Consorcio <span className="font-extrabold">FUTURO</span>
                  </div>
                  <div className="text-white/70 text-[11px] -mt-0.5">
                    Edu-Banca para familias
                  </div>
                </div>
                <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white/80">
                  beta
                </span>
              </Link>

              {/* Tabs Padre / Niño */}
              <nav className="hidden sm:flex items-center bg-white/10 rounded-full p-1 shadow-inner">
                <Tab to={padrePath}>Padre</Tab>
                <Tab to={hijoPath}>Niño</Tab>
              </nav>

              {/* CTA Volver a Consorcio (Sucursal Virtual) */}
              <a
                href="https://www.consorcio.cl"   /* pon aquí la URL de la Sucursal Virtual si es otra */
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-4 h-10 rounded-full
                           bg-white/15 text-white/95 hover:bg-white/25 transition
                           backdrop-blur-md border border-white/10"
                title="Abrir Sucursal Virtual de Consorcio"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     className="opacity-90 group-hover:translate-x-0.5 transition-transform">
                  <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3 10 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M14 21H5a2 2 0 0 1-2-2V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <span className="hidden xs:inline">Volver a Consorcio</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="h-[3px] bg-gradient-to-r from-mint/70 via-sky/70 to-lilac/70" />
    </header>
  );
}

/* --- Layout principal --- */
export default function Layout() {
  return (
    <div className="min-h-screen bg-peach/40">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>

      {/* Footer mínimo */}
      <footer className="py-10 text-center text-slate-500 text-sm">
        © Consorcio FUTURO — prototipo académico
      </footer>
    </div>
  );
}
