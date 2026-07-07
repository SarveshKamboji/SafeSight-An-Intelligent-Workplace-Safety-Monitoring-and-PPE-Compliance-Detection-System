import { ShieldCheck, Bell, Activity } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="container-xl flex h-16 items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20">
            <ShieldCheck className="h-6 w-6 text-amber-400" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              PPE Sentinel
            </h1>

            <p className="text-xs text-slate-400">
              AI Construction Safety Inspection
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* System Status */}
          <div className="hidden md:flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
            <Activity className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-slate-300">
              System Online
            </span>
          </div>

          <StatusBadge
            status="compliant"
            text="AI Ready"
          />

          <button
            className="
              rounded-xl
              border border-slate-800
              bg-slate-900
              p-2.5
              transition
              hover:border-amber-400/40
              hover:bg-slate-800
            "
          >
            <Bell className="h-5 w-5 text-slate-300" />
          </button>
        </div>
      </div>
    </header>
  );
}