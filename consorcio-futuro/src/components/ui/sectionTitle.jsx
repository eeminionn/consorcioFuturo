export default function SectionTitle({ title, subtitle }){
  return (
    <div className="mb-2">
      <h2 className="font-display text-2xl text-brand">{title}</h2>
      {subtitle && <p className="text-slate-600">{subtitle}</p>}
    </div>
  );
}
