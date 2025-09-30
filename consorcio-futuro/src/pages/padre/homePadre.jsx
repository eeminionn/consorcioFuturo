// src/pages/padre/homePadre.jsx
import { motion } from "framer-motion";
const fade = { initial:{opacity:0,y:10}, animate:{opacity:1,y:0}, transition:{duration:.45} };

export default function HomePadre(){
  return (
    <motion.div {...fade} className="space-y-8">
      <header>
        <h1 className="font-display text-3xl text-brand">Panel del padre</h1>
        <p className="text-slate-600">Aprueba compras, define límites y mira el progreso.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="font-semibold">Solicitudes pendientes</h3>
          <p className="mt-2 text-sm text-slate-600">Compra $7.000 — Tienda Líder</p>
          <div className="mt-4 flex gap-2">
            <Button primary>Aprobar</Button>
            <Button>Rechazar</Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold">Límites</h3>
          <p className="mt-2 text-sm text-slate-600">Diario: $5.000 • Comercio: Snacks</p>
          <div className="mt-4">
            <Button>Configurar</Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold">Reporte semanal</h3>
          <p className="mt-2 text-sm text-slate-600">Resumen de ahorro y gastos del menor.</p>
          <div className="mt-4">
            <Button primary>Descargar PDF</Button>
          </div>
        </Card>
      </section>

      <footer className="text-center text-slate-500 text-sm">
        © Consorcio FUTURO — prototipo académico
      </footer>
    </motion.div>
  );
}

function Card({children}){
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/50 shadow-sm
                 hover:shadow-lg hover:bg-white/80">
      {children}
    </motion.div>
  );
}

function Button({children, primary}){
  return (
    <button
      className={
        primary
          ? "px-4 py-2 rounded-xl bg-brand text-white shadow hover:brightness-110"
          : "px-4 py-2 rounded-xl bg-white border hover:bg-slate-50"
      }>
      {children}
    </button>
  );
}
