import { motion } from "framer-motion";
import GlassCard from "../../components/ui/glassCard";
import Button from "../../components/ui/button";
import SectionTitle from "../../components/ui/sectionTitle";
import { PiggyBank, GameController, Crown, Target, Lightning } from "@phosphor-icons/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const fadeUp = { initial:{opacity:0,y:18}, whileInView:{opacity:1,y:0}, viewport:{once:true, amount:.2}, transition:{duration:.55} };

export default function HomeHijo(){
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <motion.div {...fadeUp}>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            ¡Hola, <span className="text-brand">Matías</span>! 👋<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach via-lilac to-sky">
              Aprende a ahorrar jugando
            </span>
          </h1>
          <p className="mt-3 text-slate-600">Mira tu saldo, crea metas y gana insignias con mini-desafíos.</p>
          <div className="mt-5 flex gap-3">
            <Button variant="pill">Ver mis metas</Button>
            <Button variant="ghost">Aprender jugando</Button>
          </div>
        </motion.div>

        <motion.div {...fadeUp}
          className="h-56 md:h-64 rounded-2xl relative overflow-hidden shadow-glass">
          <div className="absolute inset-0 gradient-blob opacity-70"></div>
          <div className="absolute inset-0 grid place-items-center text-6xl">✨</div>
        </motion.div>
      </section>

      {/* KPIs */}
      <section className="grid sm:grid-cols-3 gap-4">
        <Kpi color="bg-peach" icon={<PiggyBank size={24}/>} title="Saldo" value="$5.500" />
        <Kpi color="bg-sky"   icon={<Target size={24}/>}    title="Meta Bicicleta" value="60%" />
        <Kpi color="bg-lilac" icon={<Crown size={24}/>}     title="Insignias" value="3" />
      </section>

      {/* ACCIONES */}
      <motion.section {...fadeUp} className="grid md:grid-cols-3 gap-4">
        <ActionCard gradient="from-mint to-sky" icon={<Target size={28}/>}
          title="Mis Metas" desc="Crea metas y mira el progreso con barras claras." cta="Crear meta" />
        <ActionCard gradient="from-peach to-lilac" icon={<GameController size={28}/>}
          title="Aprender Jugando" desc="Trivias rápidas, gana monedas FUTURO." cta="Jugar ahora" />
        <ActionCard gradient="from-lime to-peach" icon={<Lightning size={28}/>}
          title="Racha de Ahorro" desc="Ahorra diario y gana recompensas." cta="Ver racha" />
      </motion.section>

      {/* LOGROS – carrusel */}
      <motion.section {...fadeUp}>
        <SectionTitle title="Tus logros" subtitle="Completa retos y gana medallas." />
        <Swiper spaceBetween={16} slidesPerView={1.15} breakpoints={{640:{slidesPerView:2.2},1024:{slidesPerView:3.2}}}>
          {["Ahorrista Nivel 1","Compra Responsable","Racha 7 días","Meta cumplida"].map((t,i)=>(
            <SwiperSlide key={i}>
              <GlassCard className="h-36 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach to-sky grid place-items-center text-xl">🏅</div>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-slate-600">+50 monedas FUTURO</div>
                </div>
              </GlassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </div>
  );
}

function Kpi({color,icon,title,value}){
  return (
    <GlassCard className={`${color} text-brand/90`}>
      <div className="flex items-center justify-between">
        <div className="p-2 bg-white/70 rounded-xl">{icon}</div>
        <span className="text-2xl font-display">{value}</span>
      </div>
      <div className="mt-2 font-semibold">{title}</div>
    </GlassCard>
  );
}
function ActionCard({gradient,icon,title,desc,cta}){
  return (
    <motion.div whileHover={{y:-6, scale:1.02}} transition={{type:"spring",stiffness:220,damping:18}}
      className="rounded-2xl overflow-hidden shadow-glass bg-white">
      <div className={`h-28 bg-gradient-to-br ${gradient} flex items-center justify-center`}>{icon}</div>
      <div className="p-4">
        <div className="font-semibold">{title}</div>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
        <Button className="mt-3" variant="primary">{cta}</Button>
      </div>
    </motion.div>
  );
}
