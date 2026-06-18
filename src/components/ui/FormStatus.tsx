import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function FormStatus({ status }: { status: "success" | "error" | null }) {
  if (!status) return null;

  if (status === "success") {
    return (
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-line-2 bg-brand-light px-4 py-3 text-sm font-medium text-brand-dark">
        <CheckCircle2 size={18} className="shrink-0 text-brand" />
        Thanks — we&apos;ve received it and will reach out shortly.
      </div>
    );
  }

  return (
    <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
      <AlertTriangle size={18} className="shrink-0" />
      Something went wrong. Please try again, or message us directly on WhatsApp.
    </div>
  );
}
