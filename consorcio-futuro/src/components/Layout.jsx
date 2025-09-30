import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-slate-50">
      <header style={{display:"flex",gap:12,alignItems:"center",padding:"12px 16px",background:"#0e375f",color:"#fff"}}>
        <strong>Consorcio FUTURO</strong>
        <nav style={{display:"flex",gap:10,marginLeft:"auto"}}>
          <Link to="/" style={{color:"#fff",opacity: pathname==="/" ? 1:0.7}}>Padre</Link>
          <Link to="/hijo" style={{color:"#fff",opacity: pathname==="/hijo" ? 1:0.7}}>Niño</Link>
        </nav>
      </header>
      <main style={{padding:16}}><Outlet/></main>
    </div>
  );
}
