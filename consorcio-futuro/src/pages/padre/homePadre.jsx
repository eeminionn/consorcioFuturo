import { colors } from "../../app/theme";
export default function HomePadre(){
  return (
    <section>
      <h1 style={{color: colors.brand, marginBottom:12}}>Panel del Padre</h1>
      <ul>
        <li>Saldo hijo: $10.000 (mock)</li>
        <li>1 compra pendiente → <button>Aprobar/Rechazar</button></li>
        <li><button>Configurar límites</button> <button>Ver reportes</button></li>
      </ul>
    </section>
  );
}
