"use client";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";

export default function SubmitButton({
  submitState,
  buttonText,
  inView,
}: {
  submitState: "idle" | "loading" | "success" | "error";
  buttonText: string;
  inView: boolean;
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition:
          "opacity 0.65s ease 1150ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 1150ms",
      }}
    >
      <button
        type="submit"
        disabled={submitState === "loading"}
        className={`relative w-full sm:w-auto px-10 py-3.5 rounded-lg font-bold text-sm text-white
          overflow-hidden transition-all duration-300 disabled:cursor-not-allowed
          ${
            submitState === "idle"
              ? "hover:brightness-115 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 btn-pulse"
              : submitState === "success"
                ? "bg-emerald-500 scale-[1.02]"
                : submitState === "error"
                  ? "bg-red-500 scale-[1.02]"
                  : "opacity-80"
          }`}
        style={
          submitState === "idle"
            ? { background: "linear-gradient(135deg, #2db87a 0%, #16a34a 100%)" }
            : {}
        }
      >
        <span
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
            animation: "shimmerText 1.5s linear infinite",
          }}
        />
        <span className="relative flex items-center justify-center gap-2">
          {submitState === "idle" && buttonText}
          {submitState === "loading" && (
            <>
              <Loader2 size={16} className="spin" />
              Booking your slot…
            </>
          )}
          {submitState === "success" && (
            <>
              <CheckCircle2 size={16} style={{ animation: "checkPop 0.4s cubic-bezier(0.175,0.885,0.32,1.275) both" }} />
              Appointment Booked!
            </>
          )}
          {submitState === "error" && (
            <>
              <XCircle size={16} style={{ animation: "checkPop 0.4s cubic-bezier(0.175,0.885,0.32,1.275) both" }} />
              Booking Failed. Try Again.
            </>
          )}
        </span>
      </button>
    </div>
  );
}
