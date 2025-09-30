import { colors } from "../../app/theme";
export default function HomeHijo(){
  return (
    <section>
      <h1 style={{color: colors.brand, marginBottom:12}}>Hola, Matías 👋</h1>
      <div>Saldo: $5.500</div>
      <div style={{marginTop:12}}>Meta “Bicicleta” 60% ▓▓▓▓▓░░</div>
      <div style={{marginTop:12, display:"flex", gap:8}}>
        <button>Mis metas</button>
        <button>Usar mi tarjeta</button>
        <button>Aprender jugando</button>
      </div>
    </section>
  );
}
