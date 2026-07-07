import {
  ShieldCheck,
  TriangleAlert,
  BadgeCheck,
} from "lucide-react";

import Card from "../ui/Card";
import StatItem from "../ui/StatItem";
import StatusBadge from "../ui/StatusBadge";

export default function CompliancePanel({
  compliance = {},
}) {
  const {
    score = 0,
    compliantWorkers = 0,
    nonCompliantWorkers = 0,
    status = "pending",
  } = compliance;

  return (
    <Card
      title="Compliance Summary"
      subtitle="Overall PPE compliance based on AI inspection."
    >
      <div className="space-y-6">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              {score}%
            </h2>

            <p className="mt-2 text-slate-400">
              Overall Compliance Score
            </p>
          </div>

          <StatusBadge status={status} />
        </div>

        {/* Progress */}
        <div>
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>Compliance</span>
            <span>{score}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-amber-400 transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-2">
          <StatItem
            icon={<BadgeCheck size={22} />}
            label="Compliant Workers"
            value={compliantWorkers}
            color="green"
          />

          <StatItem
            icon={<TriangleAlert size={22} />}
            label="Non-Compliant"
            value={nonCompliantWorkers}
            color="red"
          />
        </div>

        {/* Summary */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-amber-400" />

            <p className="text-sm leading-7 text-slate-300">
              The AI inspection evaluated
              <span className="font-semibold text-white">
                {" "}
                {compliantWorkers + nonCompliantWorkers} workers
              </span>
              . Overall PPE compliance is currently
              <span className="font-semibold text-amber-400">
                {" "}
                {score}%
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}