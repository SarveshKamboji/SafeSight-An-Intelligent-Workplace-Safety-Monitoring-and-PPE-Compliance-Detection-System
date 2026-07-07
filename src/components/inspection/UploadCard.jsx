import {
  Upload,
  Trash2,
  Play,
  FileImage,
  HardDrive,
  Clock3,
  CircleCheck,
} from "lucide-react";
import { useDropzone } from "react-dropzone";

import Card from "../ui/Card";
import Button from "../ui/Button";
import EmptyState from "../ui/EmptyState";
import InfoRow from "../ui/InfoRow";
import StatusBadge from "../ui/StatusBadge";
import LoadingOverlay from "../ui/LoadingOverlay";

export default function UploadCard({
  image,
  annotatedImage,
  file,
  loading = false,
  onDrop,
  onRemove,
  onInspect,
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop,
  });

  const uploadTime = new Date().toLocaleTimeString();

  return (
    <section id="upload-section">
      <Card
        title="Upload Inspection Image"
        subtitle="Upload a construction site image for AI-powered PPE inspection."
      >
        {!image ? (
          <div
            {...getRootProps()}
            className={`
              cursor-pointer rounded-2xl border-2 border-dashed p-10
              transition-all duration-300
              ${
                isDragActive
                  ? "border-amber-400 bg-amber-400/10"
                  : "border-slate-700 hover:border-amber-400/40 hover:bg-slate-800/40"
              }
            `}
          >
            <input {...getInputProps()} />

            <EmptyState
              icon={<Upload size={42} />}
              title="Upload Construction Site Image"
              description="Drag & drop an image here or click to browse."
            />
          </div>
        ) : (
          <div className="relative">
            {loading && <LoadingOverlay />}

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image Preview */}
              <div>
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
                  <img
                    src={annotatedImage || image}
                    alt="Inspection Preview"
                    className="h-[450px] w-full object-contain"
                  />
                </div>
              </div>

              {/* Information Panel */}
              <div className="flex flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Inspection Information
                  </h3>

                  <StatusBadge
                    status={loading ? "processing" : "compliant"}
                    text={loading ? "Processing" : "Ready"}
                  />
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900">
                  <InfoRow
                    icon={<FileImage size={16} />}
                    label="File Name"
                    value={file?.name || "-"}
                  />

                  <InfoRow
                    icon={<HardDrive size={16} />}
                    label="File Size"
                    value={
                      file
                        ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                        : "-"
                    }
                  />

                  <InfoRow
                    icon={<Clock3 size={16} />}
                    label="Upload Time"
                    value={uploadTime}
                  />

                  <InfoRow
                    icon={<CircleCheck size={16} />}
                    label="Status"
                    value={loading ? "Running AI Inspection" : "Ready"}
                    valueColor={
                      loading ? "text-blue-400" : "text-emerald-400"
                    }
                  />
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    className="w-full"
                    icon={<Play size={18} />}
                    loading={loading}
                    onClick={onInspect}
                  >
                    Run AI Inspection
                  </Button>

                  <Button
                    className="w-full"
                    variant="secondary"
                    icon={<Upload size={18} />}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    Change Image
                  </Button>

                  <Button
                    className="w-full"
                    variant="danger"
                    icon={<Trash2 size={18} />}
                    onClick={onRemove}
                  >
                    Remove Image
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}