import clsx from "clsx";

export default function StatItem({
  label,
  value,
  icon,
  color = "amber",
  className = "",
}) {
  const colorMap = {
    amber: {
      iconBg: "bg-amber-400/10",
      iconText: "text-amber-400",
      valueText: "text-amber-400",
    },
    green: {
      iconBg: "bg-emerald-500/10",
      iconText: "text-emerald-400",
      valueText: "text-emerald-400",
    },
    red: {
      iconBg: "bg-red-500/10",
      iconText: "text-red-400",
      valueText: "text-red-400",
    },
    blue: {
      iconBg: "bg-blue-500/10",
      iconText: "text-blue-400",
      valueText: "text-blue-400",
    },
    slate: {
      iconBg: "bg-slate-700",
      iconText: "text-slate-300",
      valueText: "text-white",
    },
  };

  const theme = colorMap[color] || colorMap.amber;

  return (
    <div
      className={clsx(
        "rounded-xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-amber-400/30",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div
            className={clsx(
              "flex h-12 w-12 items-center justify-center rounded-xl",
              theme.iconBg,
              theme.iconText
            )}
          >
            {icon}
          </div>
        )}

        <div>
          <p className="text-sm text-slate-400">
            {label}
          </p>

          <h3
            className={clsx(
              "mt-1 text-2xl font-bold",
              theme.valueText
            )}
          >
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}