import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { PiggyBank, GameController, Crown, Target, Lightning } from "@phosphor-icons/react";
//import heroAnim from "./lottie-hero.json"; // usa cualquier lottie json de mascot/stars
// Puedes descargar un JSON libre en lottiefiles.com y guardarlo en esta carpeta.

const fadeUp = { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true, amount:0.3}, transition:{duration:.6} };

export default function HomeHijo(){
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="grid md:grid-cols-2 items-center gap-6 p-6 glass rounded-2xl">
        <motion.div {...fadeUp}>
          <h1 className="font-display text-3xl md:text-4xl leading-tight">
            ¡Hola, <span className="text-brand">Matías</span>! 👋<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach via-lilac to-sky">
              Aprende a ahorrar jugando
            </span>
          </h1>
          <p className="mt-3 text-slate-600">
            Mira tu saldo, crea metas para tus sueños y gana insignias completando mini-desafíos.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-brand text-white shadow-lg hover:shadow-xl transition">
              Ver mis metas
            </button>
            <button className="px-4 py-2 rounded-xl bg-white border hover:bg-slate-50 transition">
              Aprender jugando
            </button>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="h-56 md:h-64">
          <div className="h-56 md:h-64 rounded-2xl bg-gradient-to-br from-peach via-lilac to-sky
                flex items-center justify-center shadow-lg">
  <span className="text-5xl">✨</span>
</div>

        </motion.div>
      </section>

      {/* STATS CARDS */}
      <section className="grid sm:grid-cols-3 gap-4">
        <StatCard color="bg-peach"  icon={<PiggyBank size={28}/>}  title="Saldo" value="$5.500" />
        <StatCard color="bg-sky"    icon={<Target size={28}/>}     title="Meta Bicicleta" value="60%"/>
        <StatCard color="bg-lilac"  icon={<Crown size={28}/>}      title="Insignias" value="3"/>
      </section>

      {/* CARDS ACCIONES */}
      <motion.section {...fadeUp} className="grid md:grid-cols-3 gap-4">
        <ActionCard
          color="from-mint to-sky"
          title="Mis Metas"
          desc="Crea metas y mira el progreso con barras súper claras."
          icon={<Target size={28} />}
          cta="Crear meta"
        />
        <ActionCard
          color="from-peach to-lilac"
          title="Aprender Jugando"
          desc="Responde trivias rápidas y gana monedas FUTURO."
          icon={<GameController size={28} />}
          cta="Jugar ahora"
        />
        <ActionCard
          color="from-lime to-peach"
          title="Racha de Ahorro"
          desc="Ahorra un poquito cada día y gana recompensas."
          icon={<Lightning size={28} />}
          cta="Ver racha"
        />
      </motion.section>
    </div>
  );
}

function StatCard({color, icon, title, value}){
  return (
    <motion.div {...fadeUp}
      className={`rounded-2xl p-4 ${color} text-brand/90 shadow-sm`}>
      <div className="flex items-center justify-between">
        <div className="p-2 bg-white/70 rounded-xl">{icon}</div>
        <span className="text-2xl font-display">{value}</span>
      </div>
      <div className="mt-2 font-semibold">{title}</div>
    </motion.div>
  );
}

function ActionCard({color, title, desc, icon, cta}){
  return (
    <motion.div whileHover={{y:-4}} transition={{type:"spring", stiffness:180, damping:16}}
      className="rounded-2xl overflow-hidden shadow-lg">
      <div className={`h-28 bg-gradient-to-br ${color} flex items-center justify-center`}>{icon}</div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
        <button className="mt-3 px-3 py-2 bg-brand text-white rounded-xl text-sm hover:brightness-110">{cta}</button>
      </div>
    </motion.div>
  );

  
}
