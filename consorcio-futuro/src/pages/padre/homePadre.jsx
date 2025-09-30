// src/pages/padre/homePadre.jsx
import { motion } from "framer-motion";
import { Gear, CheckCircle, XCircle } from "@phosphor-icons/react";

export default function HomePadre() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach to-lilac p-6">
      <div className="max-w-6xl mx-auto">
        {/* Tarjeta contenedora principal */}
        <motion.div
          {...fadeUp}
          className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8"
        >
          <h1 className="text-3xl font-display font-bold text-brand mb-2">
            Panel del padre
          </h1>
          <p className="text-slate-600 mb-8">
            Aprueba compras, define límites y mira el progreso.
          </p>

          {/* Sección con 3 tarjetas */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Solicitudes pendientes */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-brand mb-4">
                Solicitudes pendientes
              </h2>
              <p className="text-slate-700 text-sm mb-2">
                Compra <b>$7.000</b> — <span className="font-medium">Tienda Líder</span>
              </p>
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                  Débito
                </span>
                <span className="px-3 py-1 bg-peach text-slate-800 text-xs rounded-full">
                  Comida
                </span>
              </div>
              {/* Botones */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-xl shadow hover:bg-brand/90 transition">
                  <XCircle size={18} weight="bold" /> Rechazar
                </button>
                <button className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-xl shadow hover:bg-brand/90 transition">
                  <CheckCircle size={18} weight="bold" /> Aprobar
                </button>
              </div>
            </motion.div>

            {/* Límites */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-brand mb-4">Límites</h2>
              <p className="text-sm text-slate-700">
                Diario: <b>$5.000</b> • Comercio: <b>Snacks</b>
              </p>
              <div className="mt-3 flex items-center gap-3">
                <input
                  id="notifLimit"
                  type="checkbox"
                  className="scale-125 accent-brand"
                  defaultChecked
                />
                <label htmlFor="notifLimit" className="text-sm text-slate-600">
                  Notificar &gt; $3.000
                </label>
              </div>
              <button className="mt-4 flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-xl shadow hover:bg-brand/90 transition">
                <Gear size={18} /> Configurar
              </button>
            </motion.div>

            {/* Reporte semanal */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="bg-white shadow-lg rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-brand mb-4">
                Reporte semanal
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Resumen de ahorro y gastos del menor.
              </p>
              <button className="bg-brand text-white px-4 py-2 rounded-xl shadow hover:bg-brand/90 transition">
                Descargar PDF
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-8">
          © Consorcio FUTURO — prototipo académico
        </p>
      </div>
    </div>
  );
}
