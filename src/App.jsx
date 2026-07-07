import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/inspection/HeroSection";
import UploadCard from "./components/inspection/UploadCard";
import InspectionDetails from "./components/inspection/InspectionDetails";
import DetectionResults from "./components/inspection/DetectionResults";
import CompliancePanel from "./components/inspection/CompliancePanel";
import InspectionReport from "./components/inspection/InspectionReport";

import { inspectImage } from "./services/api";

export default function App() {
  const [inspectionId, setInspectionId] = useState("");
  const [reportId, setReportId] = useState("");
  const [inspectionTime, setInspectionTime] = useState("");
  const [processingTime, setProcessingTime] = useState("--");
  const [imageResolution, setImageResolution] = useState("--");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [inspectionData, setInspectionData] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = (acceptedFiles) => {
    if (!acceptedFiles.length) return;

    const selectedFile = acceptedFiles[0];

    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
    const img = new Image();

    img.onload = () => {
      setImageResolution(`${img.width} × ${img.height}`);
    };

    img.src = URL.createObjectURL(selectedFile);
    setInspectionData(null);
    setError("");
  };

  const handleRemove = () => {
    setImage(null);
    setFile(null);
    setInspectionData(null);
    setError("");
  };

  const handleInspect = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setError("");

      const start = performance.now();

      const data = await inspectImage(file);

      const end = performance.now();

      setProcessingTime(`${((end - start) / 1000).toFixed(2)} s`);
      const timestamp = Date.now();

      setInspectionId(`PPE-${timestamp}`);
      setReportId(`REP-${timestamp}`);
      setInspectionTime(new Date().toLocaleString());

      setInspectionData(data);
    } catch (err) {
      console.error(err);
      setError("Inspection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />

      <main className="container-xl py-10">
        <UploadCard
          image={image}
          annotatedImage={inspectionData?.annotated_image}
          file={file}
          loading={loading}
          onDrop={handleDrop}
          onRemove={handleRemove}
          onInspect={handleInspect}
        />

        {error && (
          <div className="mt-6 rounded-lg border border-red-500 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}
      </main>

      {inspectionData && (
        <>
          <div className="mt-8">
            <InspectionDetails
              details={{
                workers: inspectionData.worker_count,
                processingTime: processingTime,
                inspectionTime: new Date().toLocaleString(),
                imageResolution: imageResolution,
                model: "YOLOv8 PPE",
                inspectionId: inspectionId,
              }}
            />
          </div>

          <div className="mt-8">
            <DetectionResults
              results={{
                workers: inspectionData.worker_count,
                helmets: inspectionData.helmet_count,
                vests: inspectionData.vest_count,
                gloves: inspectionData.gloves_count,
                boots: inspectionData.boots_count,
                goggles: inspectionData.goggles_count,
                violations: inspectionData.violation_count,
                annotatedImage: inspectionData.annotated_image,
              }}
            />
          </div>

          <div className="mt-8">
            <CompliancePanel
              compliance={{
                score: inspectionData.compliance_score,
                compliantWorkers: inspectionData.compliant_workers,
                nonCompliantWorkers: inspectionData.non_compliant_workers,
                status:
                  inspectionData.compliance_score >= 90
                    ? "good"
                    : inspectionData.compliance_score >= 60
                    ? "partial"
                    : "poor",
              }}
            />
          </div>

          <div className="mt-8">
            <InspectionReport
              report={{
                reportId: reportId,
                inspectionDate: inspectionTime,
                complianceScore: inspectionData.compliance_score,
                status:
                  inspectionData.compliance_score >= 90
                    ? "good"
                    : inspectionData.compliance_score >= 70
                    ? "partial"
                    : "poor",
                remarks:
                  inspectionData.violations.length > 0
                    ? inspectionData.violations.join(", ")
                    : "All workers are compliant.",
              }}
              onDownload={() => alert("PDF download coming soon")}
            />
          </div>
        </>
      )}
    </div>
  );
}