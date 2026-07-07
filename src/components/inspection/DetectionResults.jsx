import {
  HardHat,
  Shield,
  Users,
  TriangleAlert,
} from "lucide-react";

import Card from "../ui/Card";
import StatItem from "../ui/StatItem";
import EmptyState from "../ui/EmptyState";

export default function DetectionResults({
  results = null,
}) {
  if (!results) {
    return (
      <Card
        title="Detection Results"
        subtitle="AI detection results will appear here."
      >
        <EmptyState
          icon={<Users size={40} />}
          title="No Inspection Results"
          description="Run an AI inspection to view detected workers, helmets, safety vests and violations."
        />
      </Card>
    );
  }

  const {
    workers = 0,
    helmets = 0,
    vests = 0,
    violations = 0,
  } = results;

  return (
    <Card
      title="Detection Results"
      subtitle="Objects detected by the AI model."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatItem
          icon={<Users size={22} />}
          label="Workers"
          value={workers}
          color="blue"
        />

        <StatItem
          icon={<HardHat size={22} />}
          label="Helmets"
          value={helmets}
          color="green"
        />

        <StatItem
          icon={<Shield size={22} />}
          label="Safety Vests"
          value={vests}
          color="amber"
        />

        <StatItem
          icon={<TriangleAlert size={22} />}
          label="Violations"
          value={violations}
          color="red"
        />
      </div>
    </Card>
  );
}