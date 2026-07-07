import clsx from "clsx";

export default function Card({
  children,
  title,
  subtitle,
  icon,
  actions,
  hover = true,
  padding = "md",
  className = "",
}) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-800",
        "bg-slate-900/90 backdrop-blur-md",
        "shadow-xl shadow-black/20",
        "transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-amber-500/10",
        paddingStyles[padding],
        className
      )}
    >
      {(title || subtitle || icon || actions) && (
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                {icon}
              </div>
            )}

            <div>
              {title && (
                <h2 className="text-lg font-semibold text-white">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="mt-1 text-sm text-slate-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {actions && <div>{actions}</div>}
        </div>
      )}

      {children}
    </div>
  );
}