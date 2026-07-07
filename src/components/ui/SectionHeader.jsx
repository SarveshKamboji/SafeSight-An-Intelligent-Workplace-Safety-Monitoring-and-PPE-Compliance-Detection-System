import clsx from "clsx";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  icon,
  action,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
            {icon}
          </div>
        )}

        <div>
          {eyebrow && (
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              {eyebrow}
            </p>
          )}

          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      {action && (
        <div className="flex shrink-0 items-center">
          {action}
        </div>
      )}
    </div>
  );
}