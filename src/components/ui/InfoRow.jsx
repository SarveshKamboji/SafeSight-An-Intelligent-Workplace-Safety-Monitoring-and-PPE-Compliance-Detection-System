import clsx from "clsx";

export default function InfoRow({
  label,
  value,
  icon,
  valueColor = "text-white",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-4 border-b border-slate-800 py-3 last:border-b-0",
        className
      )}
    >
      <div className="flex items-center gap-3 text-slate-400">
        {icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
            {icon}
          </div>
        )}

        <span className="text-sm font-medium">
          {label}
        </span>
      </div>

      <span
        className={clsx(
          "text-sm font-semibold text-right",
          valueColor
        )}
      >
        {value}
      </span>
    </div>
  );
}