import clsx from "clsx";

const variants = {
  good: {
    label: "Compliant",
    classes:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },

  partial: {
    label: "Partially Compliant",
    classes:
      "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  },

  poor: {
    label: "Non-Compliant",
    classes:
      "bg-red-500/10 text-red-400 border border-red-500/20",
  },

  processing: {
    label: "Processing",
    classes:
      "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  },

  pending: {
    label: "Pending Inspection",
    classes:
      "bg-slate-700/30 text-slate-300 border border-slate-600",
  },
};

export default function StatusBadge({
  status = "pending",
  text,
  className = "",
}) {
  const current = variants[status] || variants.pending;

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "text-sm font-medium transition-all duration-300",
        current.classes,
        className
      )}
    >
      <span
        className={clsx(
          "h-2.5 w-2.5 rounded-full",
          status === "good" && "bg-emerald-400",
          status === "partial" && "bg-amber-400",
          status === "poor" && "bg-red-400",
          status === "processing" && "bg-blue-400 animate-pulse",
          status === "pending" && "bg-slate-400"
        )}
      />

      {text || current.label}
    </span>
  );
}