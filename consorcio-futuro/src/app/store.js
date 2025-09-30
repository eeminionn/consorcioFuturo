import { create } from "zustand";
export const useApp = create(set => ({
  hijo: { nombre:"Matías", saldo:5500, metas:[{id:1,n:"Bicicleta",total:10000,ahorro:6000}] },
  aprobarCompra: (monto)=> set(s=>({ hijo:{...s.hijo, saldo: s.hijo.saldo - monto} })),
}));
