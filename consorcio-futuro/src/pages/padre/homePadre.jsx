// src/pages/padre/homePadre.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, XCircle, Gear, DownloadSimple,
  Bell, ChartBar, PiggyBank, Target, Warning, ChatCircleDots
} from "@phosphor-icons/react";

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function HomePadre() {
  // ---- Datos mock (puedes conectar a tu estado/API cuando quieras)
  const gastosSemana = [7, 4, 5, 6, 3, 8, 2];         // en miles
  const ahorroVsGasto = { ahorro: 35, gasto: 65 };     // %
  const saldoActual = 5500; // $
  const ahorroMes = 18000;  // $
  const kpiGastoSem = 23500;

  const solicitudesInit = [
    { id: 1, titulo: "Compra $7.000 — Tienda Líder", tags: ["Débito", "Comida"], estado: "pendiente" },
    { id: 2, titulo: "Juego $4.000 — Nintendo eShop", tags: ["Débito", "Juegos"], estado: "pendiente" },
  ];

  const [solicitudes, setSolicitudes] = useState(solicitudesInit);
  const [feedbackOpen, setFeedbackOpen] = useState(null); // id de solicitud
  const [feedbackText, setFeedbackText] = useState("");

  const [limitDaily, setLimitDaily] = useState(5000);
  const [limitWeekly, setLimitWeekly] = useState(20000);
  const [notifOver, setNotifOver] = useState(3000);
  const [cats, setCats] = useState([
    { name: "Snacks", limit: 10000, active: true },
    { name: "Juegos", limit: 8000, active: true },
    { name: "Transporte", limit: 6000, active: false },
  ]);

  const alerts = [
    { id: "a1", type: "warning", text: "Gasto inusual: $9.500 en Snacks (ayer)" },
    { id: "a2", type: "success", text: "Meta 'Bicicleta' alcanzada al 100%" },
    { id: "a3", type: "info", text: "Tienes 2 solicitudes pendientes" },
  ];

  // ---- Acciones
  const aprobar = (id) => {
    setSolicitudes((s) => s.map(it => it.id === id ? { ...it, estado: "aprobada" } : it));
    setFeedbackOpen(null);
    setFeedbackText("");
  };
  const rechazar = (id) => {
    setSolicitudes((s) => s.map(it => it.id === id ? { ...it, estado: "rechazada" } : it));
    setFeedbackOpen(null);
    setFeedbackText("");
  };
  const guardarFeedback = (id) => {
    console.log("Feedback para", id, ":", feedbackText);
    setFeedbackOpen(null);
    setFeedbackText("");
  };

  const toggleCat = (name) =>
    setCats((c) => c.map(x => x.name === name ? { ...x, active: !x.active } : x));

  // ---- SVG helpers
  const donut = useMemo(() => {
    const size = 160, stroke = 16;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const ahorro = Math.max(0, Math.min(100, ahorroVsGasto.ahorro));
    const gasto = 100 - ahorro;
    return { size, stroke, r, c, ahorro, gasto };
  }, [ahorroVsGasto]);

  return (
    <div className="space-y-8">
      {/* HERO / RESUMEN */}
      <motion.section {...fade} className="grid lg:grid-cols-4 gap-6">
        <KpiCard icon={<PiggyBank size={26} />} title="Saldo actual" value={`$${formatMiles(saldoActual)}`} chip="+$2.100 esta semana" />
        <KpiCard icon={<Target size={26} />} title="Ahorro del mes" value={`$${formatMiles(ahorroMes)}`} chip="Meta Bicicleta 60%" />
        <KpiCard icon={<ChartBar size={26} />} title="Gasto semanal" value={`$${formatMiles(kpiGastoSem)}`} chip="-8% vs semana pasada"
                 sparkline data={[5,7,6,4,8,5,6]} />
        <KpiCard icon={<Bell size={26} />} title="Alertas" value="3" chip="1 inusual, 1 meta, 1 pendiente" />
      </motion.section>

      {/* GRÁFICOS */}
      <motion.section {...fade} className="grid lg:grid-cols-2 gap-6">
        <Card title="Gastos de la semana" subtitle="(miles de pesos)">
          <BarChart data={gastosSemana} labels={["L","M","X","J","V","S","D"]} />
        </Card>

        <Card title="Ahorro vs Gasto" subtitle="Distribución porcentual">
          <div className="flex items-center gap-6">
            <DonutChart percent={donut.ahorro} />
            <div className="space-y-2">
              <Legend color="from-mint to-sky" label={`Ahorro ${donut.ahorro}%`} />
              <Legend color="from-peach to-lilac" label={`Gasto ${donut.gasto}%`} />
              <p className="text-slate-600 text-sm mt-2">
                Buen ritmo de ahorro. Mantener límites y reforzar hábitos.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* APROBACIONES */}
      <motion.section {...fade}>
        <Card title="Aprobación de solicitudes" subtitle="Revisa, comenta y aprueba o rechaza">
          <div className="space-y-4">
            {solicitudes.map(s => (
              <div key={s.id} className="rounded-2xl bg-white/90 p-5 ring-1 ring-black/5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-800">{s.titulo}</p>
                    <div className="mt-2 flex gap-2 text-xs">
                      {s.tags.map(t => (
                        <span key={t} className="px-2 py-1 rounded-full bg-sky/40 text-brand">{t}</span>
                      ))}
                      <Status estado={s.estado} />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" onClick={() => setFeedbackOpen(feedbackOpen === s.id ? null : s.id)}>
                      <ChatCircleDots size={16}/> Feedback
                    </Button>
                    <Button onClick={() => rechazar(s.id)}><XCircle size={16}/> Rechazar</Button>
                    <Button variant="primary" onClick={() => aprobar(s.id)}><CheckCircle size={16}/> Aprobar</Button>
                  </div>
                </div>

                <AnimatePresence>
                  {feedbackOpen === s.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4">
                        <textarea
                          value={feedbackText}
                          onChange={e => setFeedbackText(e.target.value)}
                          placeholder='Ej: "Muy bien", "Mejor ahorra para tu meta"'
                          className="w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
                          rows={3}
                        />
                        <div className="mt-2 flex gap-2">
                          <Button onClick={() => guardarFeedback(s.id)}>Guardar</Button>
                          <Button variant="ghost" onClick={() => { setFeedbackOpen(null); setFeedbackText(""); }}>Cancelar</Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* LÍMITES */}
      <motion.section {...fade} className="grid lg:grid-cols-2 gap-6">
        <Card title="Límites diarios y semanales" subtitle="Controla el gasto del menor">
          <Slider label={`Diario: $${formatMiles(limitDaily)}`} value={limitDaily} min={0} max={20000} step={500} onChange={setLimitDaily} />
          <Slider label={`Semanal: $${formatMiles(limitWeekly)}`} value={limitWeekly} min={0} max={80000} step={1000} onChange={setLimitWeekly} />
          <div className="mt-4 flex items-center gap-3">
            <input id="notifOver" type="checkbox" className="scale-125 accent-brand" defaultChecked />
            <label htmlFor="notifOver" className="text-sm text-slate-700">
              Notificar &gt; ${formatMiles(notifOver)}
            </label>
            <input
              type="number"
              className="ml-auto w-28 rounded-xl border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
              value={notifOver}
              onChange={(e)=>setNotifOver(Number(e.target.value || 0))}
            />
          </div>
        </Card>

        <Card title="Límites por categoría" subtitle="Activa y ajusta topes específicos">
          <div className="flex flex-wrap gap-2 mb-4">
            {cats.map(c => (
              <button key={c.name}
                onClick={() => toggleCat(c.name)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  c.active ? "bg-brand text-white border-brand" : "bg-white hover:bg-slate-50 border-slate-300 text-slate-700"
                }`}>
                {c.name}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {cats.map(c => (
              <div key={c.name} className="flex items-center gap-3">
                <span className="w-28 text-sm">{c.name}</span>
                <input
                  type="range"
                  min={0} max={20000} step={500}
                  value={c.limit}
                  onChange={(e)=>setCats(prev => prev.map(x => x.name===c.name ? { ...x, limit: Number(e.target.value) } : x))}
                  className="flex-1 accent-brand"
                  disabled={!c.active}
                />
                <span className="w-24 text-right text-sm">${formatMiles(c.limit)}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* REPORTES y ALERTAS */}
      <motion.section {...fade} className="grid lg:grid-cols-2 gap-6">
        <Card title="Reportes" subtitle="Descarga semanal o mensual (PDF)">
          <div className="flex flex-wrap gap-3">
            <Button onClick={()=>console.log("descargar semanal")}><DownloadSimple size={16}/> Semanal</Button>
            <Button variant="primary" onClick={()=>console.log("descargar mensual")}><DownloadSimple size={16}/> Mensual</Button>
          </div>
          <ul className="mt-4 list-disc list-inside text-sm text-slate-700">
            <li>Compras aprobadas</li>
            <li>Ahorro acumulado</li>
            <li>Logros alcanzados</li>
            <li>Comparativa vs semanas anteriores</li>
          </ul>
        </Card>

        <Card title="Alertas y notificaciones" subtitle="Eventos relevantes">
          <div className="space-y-3">
            {alerts.map(a => (
              <div key={a.id} className="flex items-start gap-3 rounded-xl bg-white/85 p-3 ring-1 ring-black/5">
                <Badge type={a.type} />
                <p className="text-sm text-slate-800">{a.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.section>
    </div>
  );
}

/* ---------------- UI ATOMS / MOLECULES ---------------- */

function Card({ title, subtitle, children }) {
  return (
    <div className="rounded-2xl bg-white/75 backdrop-blur border border-white/50 shadow-[0_10px_30px_rgba(14,55,95,.12)] p-6">
      <div className="mb-3">
        <h3 className="font-display text-xl text-brand">{title}</h3>
        {subtitle && <p className="text-slate-600 text-sm">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function KpiCard({ icon, title, value, chip, sparkline=false, data=[] }) {
  return (
    <div className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/50 shadow-[0_10px_25px_rgba(14,55,95,.08)]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-white/70 rounded-xl text-brand">{icon}</div>
        <span className="text-2xl font-display text-brand">{value}</span>
      </div>
      <div className="mt-1 text-sm text-slate-600">{title}</div>
      {chip && <div className="mt-2 inline-flex text-xs px-2 py-1 rounded-full bg-mint/50 text-brand">{chip}</div>}
      {sparkline && <Sparkline data={data} />}
    </div>
  );
}

function Sparkline({ data }) {
  const w = 210, h = 48, pad = 6;
  const max = Math.max(...data, 1);
  const step = (w - pad * 2) / (data.length - 1 || 1);
  const points = data.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} className="mt-3">
      <polyline points={points} fill="none" stroke="currentColor" className="text-brand/60" strokeWidth="2" />
    </svg>
  );
}

function BarChart({ data, labels }) {
  const max = Math.max(...data, 1);
  return (
    <div className="grid grid-cols-7 gap-3 items-end h-40">
      {data.map((v, i) => {
        const h = Math.max(8, (v / max) * 140);
        return (
          <div key={i} className="flex flex-col items-center gap-2">
            <div style={{ height: `${h}px` }}
                 className="w-8 rounded-xl bg-gradient-to-b from-peach to-lilac shadow-soft"></div>
            <div className="text-xs text-slate-600">{labels[i]}</div>
          </div>
        );
      })}
    </div>
  );
}

function DonutChart({ percent = 35, size = 180, stroke = 18 }) {
  // padding para que el trazo no se corte
  const pad = stroke / 2 + 6;
  const r = (size - 2 * pad) / 2;
  const c = 2 * Math.PI * r;

  const ahorroLen = (percent / 100) * c;
  const gastoLen = c - ahorroLen;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      <defs>
        <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B5EAEA" />
          <stop offset="100%" stopColor="#BDE0FE" />
        </linearGradient>
        <linearGradient id="gradB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD6A5" />
          <stop offset="100%" stopColor="#CDB4DB" />
        </linearGradient>
      </defs>

      <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
        <circle r={r} fill="none" stroke="rgba(226,232,240,.7)" strokeWidth={stroke} />
        <circle
          r={r}
          fill="none"
          stroke="url(#gradA)"
          strokeWidth={stroke}
          strokeDasharray={`${ahorroLen} ${c}`}
          strokeLinecap="round"
        />
        <circle
          r={r}
          fill="none"
          stroke="url(#gradB)"
          strokeWidth={stroke}
          strokeDasharray={`${gastoLen} ${c}`}
          strokeDashoffset={-ahorroLen}
          strokeLinecap="round"
        />
      </g>

      <foreignObject x={pad} y={pad} width={size - 2 * pad} height={size - 2 * pad}>
        <div className="w-full h-full grid place-items-center">
          <div className="text-center leading-tight">
            <div className="text-xs text-slate-500">Ahorro</div>
            <div className="text-xl font-display text-brand">{percent}%</div>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}


function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${color}`}></span>
      <span className="text-slate-700">{label}</span>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between text-sm mb-1">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-500">${formatMiles(value)}</span>
      </div>
      <input
        type="range"
        className="w-full accent-brand"
        min={min} max={max} step={step}
        value={value}
        onChange={(e)=>onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Status({ estado }) {
  const map = {
    pendiente: { text: "Pendiente", cls: "bg-yellow-100 text-yellow-700" },
    aprobada:  { text: "Aprobada",  cls: "bg-green-100 text-green-700" },
    rechazada: { text: "Rechazada", cls: "bg-red-100 text-red-700" },
  };
  const s = map[estado] || map.pendiente;
  return <span className={`px-2 py-1 rounded-full text-xs ${s.cls}`}>{s.text}</span>;
}

function Badge({ type }) {
  const map = {
    warning: { icon: <Warning size={18}/>, cls: "text-amber-700 bg-amber-100" },
    success: { icon: <CheckCircle size={18}/>, cls: "text-green-700 bg-green-100" },
    info:    { icon: <Bell size={18}/>, cls: "text-sky-700 bg-sky-100" },
  };
  const b = map[type] || map.info;
  return <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${b.cls}`}>{b.icon}</span>;
}

function Button({ children, variant="default", ...rest }) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition focus:outline-none";
  const variants = {
    default: "bg-white border hover:bg-slate-50 shadow-sm focus:ring-2 focus:ring-slate-400/40",
    primary: "bg-brand text-white shadow focus:ring-2 focus:ring-brand/40 hover:brightness-110",
    ghost:   "bg-white/70 border border-slate-200 hover:bg-white shadow-sm",
  };
  return <button className={`${base} ${variants[variant]}`} {...rest}>{children}</button>;
}

function formatMiles(n){
  try { return n.toLocaleString("es-CL"); } catch { return String(n) }
}
