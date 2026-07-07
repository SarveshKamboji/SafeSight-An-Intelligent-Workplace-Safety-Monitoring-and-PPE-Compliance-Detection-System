import clsx from "clsx";

export default function EmptyState({
  icon,
  title = "Nothing to display",
  description = "Content will appear here once data becomes available.",
  action,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center",
        "rounded-2xl border border-dashed border-slate-700",
        "bg-slate-900/40",
        "px-8 py-16 text-center",
        className
      )}
    >
      {icon && (
        <div
          className="
            mb-6 flex h-20 w-20 items-center justify-center
            rounded-2xl
            border border-amber-400/20
            bg-amber-400/10
            text-amber-400
          "
        >
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-md leading-7 text-slate-400">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}