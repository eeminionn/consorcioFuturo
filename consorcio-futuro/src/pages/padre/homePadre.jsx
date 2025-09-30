import { motion } from "framer-motion";

const fade = { initial:{opacity:0,y:12}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:.5} };

export default function HomePadre(){
  return (
    <div className="space-y-6">
      <motion.div {...fade} className="glass rounded-2xl p-6">
        <h1 className="font-display text-2xl text-brand">Panel del padre</h1>
        <p className="text-slate-600">Aprueba compras, define límites y mira el progreso.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        <motion.div {...fade} className="glass rounded-2xl p-5">
          <h3 className="font-semibold">Solicitudes pendientes</h3>
          <div className="mt-3 flex items-center justify-between">
            <span>Compra $7.000 — Tienda Líder</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-brand text-white rounded-xl">Aprobar</button>
              <button className="px-3 py-1.5 bg-white border rounded-xl">Rechazar</button>
            </div>
          </div>
        </motion.div>

        <motion.div {...fade} className="glass rounded-2xl p-5">
          <h3 className="font-semibold">Límites</h3>
          <p className="text-sm text-slate-600 mt-1">Diario: $5.000 • Comercio: Snacks</p>
          <button className="mt-3 px-3 py-1.5 bg-white border rounded-xl">Configurar</button>
        </motion.div>

        <motion.div {...fade} className="glass rounded-2xl p-5">
          <h3 className="font-semibold">Reporte semanal</h3>
          <p className="text-sm text-slate-600 mt-1">Resumen de ahorro y gastos del menor.</p>
          <button className="mt-3 px-3 py-1.5 bg-brand text-white rounded-xl">Descargar PDF</button>
        </motion.div>
      </div>
    </div>
  );
}
