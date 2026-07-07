import {
  CalendarDays,
  Clock3,
  Cpu,
  Users,
  Image,
  ScanSearch,
} from "lucide-react";

import Card from "../ui/Card";
import InfoRow from "../ui/InfoRow";
import StatItem from "../ui/StatItem";

export default function InspectionDetails({
  details = {},
}) {
  const {
    workers = 0,
    processingTime = "-",
    inspectionTime = "-",
    imageResolution = "-",
    model = "YOLO PPE Detector",
    inspectionId = "INS-0001",
  } = details;

  return (
    <Card
      title="Inspection Details"
      subtitle="Metadata generated after AI inspection."
    >
      <div className="grid gap-6">
        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <StatItem
            icon={<Users size={22} />}
            label="Workers"
            value={workers}
            color="blue"
          />

          <StatItem
            icon={<Clock3 size={22} />}
            label="Processing"
            value={processingTime}
            color="green"
          />
        </div>

        {/* Metadata */}
        <div className="rounded-xl border border-slate-800 bg-slate-900">
          <InfoRow
            icon={<CalendarDays size={16} />}
            label="Inspection Time"
            value={inspectionTime}
          />

          <InfoRow
            icon={<Image size={16} />}
            label="Image Resolution"
            value={imageResolution}
          />

          <InfoRow
            icon={<Cpu size={16} />}
            label="AI Model"
            value={model}
          />

          <InfoRow
            icon={<ScanSearch size={16} />}
            label="Inspection ID"
            value={inspectionId}
          />
        </div>
      </div>
    </Card>
  );
}