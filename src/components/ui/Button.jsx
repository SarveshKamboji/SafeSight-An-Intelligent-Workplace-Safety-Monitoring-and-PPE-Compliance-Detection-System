import clsx from "clsx";

const variants = {
  primary:
    "bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20",

  secondary:
    "bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100",

  success:
    "bg-emerald-600 hover:bg-emerald-700 text-white",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",

  outline:
    "border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900",

  ghost:
    "text-slate-300 hover:bg-slate-800"
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl font-semibold",
        "transition-all duration-300",
        "active:scale-95",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus:outline-none focus:ring-2 focus:ring-amber-400/40",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              opacity=".25"
            />
            <path
              d="M22 12A10 10 0 0012 2"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
}