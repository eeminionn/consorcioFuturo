export default function GlassCard({ children, className="" }){
  return (
    <div className={`rounded-2xl bg-white/75 backdrop-blur border border-white/50 p-5 shadow-glass ${className}`}>
      {children}
    </div>
  );
}
