import { Loader2, Cpu } from "lucide-react";

export default function LoadingOverlay({
  title = "Running AI Inspection",
  description = "Analyzing the uploaded construction site image...",
}) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-2xl bg-slate-950/85 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/10">
            <Loader2 className="h-10 w-10 animate-spin text-amber-400" />
          </div>

          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {description}
          </p>

          <div className="mt-8 w-full">
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 animate-pulse rounded-full bg-amber-400" />
            </div>
          </div>

          <div className="mt-8 space-y-4 w-full">
            <StatusRow text="Detecting Workers" />
            <StatusRow text="Checking Helmets" />
            <StatusRow text="Checking Safety Vests" />
            <StatusRow text="Generating Inspection Report" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusRow({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-800/60 px-4 py-3">
      <Cpu className="h-5 w-5 animate-pulse text-amber-400" />

      <span className="text-sm text-slate-300">
        {text}
      </span>
    </div>
  );
}