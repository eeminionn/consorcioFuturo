export default function Button({ children, variant="primary", className="", ...rest }){
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition";
  const map = {
    primary: "bg-brand text-white hover:brightness-110 shadow-soft",
    ghost:   "bg-white border hover:bg-slate-50",
    pill:    "px-5 py-2 rounded-full bg-brand text-white hover:brightness-110 shadow-soft",
  }
  return <button className={`${base} ${map[variant]} ${className}`} {...rest}>{children}</button>
}
