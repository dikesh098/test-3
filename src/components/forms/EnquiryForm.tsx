"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { whatsappLink } from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import FormStatus from "@/components/ui/FormStatus";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function EnquiryForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus(null);
    const supabase = getSupabaseClient();
    const waMessage = `Hello eSakha!\n\nName: ${data.name}\nMobile: ${data.mobile}\nService: ${data.service}${
      data.message ? `\nMessage: ${data.message}` : ""
    }\n\nPlease guide me further.`;

    if (!supabase) {
      window.open(whatsappLink(waMessage), "_blank");
      setStatus("success");
      reset();
      return;
    }

    const { error } = await supabase.from("leads").insert({
      name: data.name,
      phone: data.mobile,
      service: data.service,
      message: data.message || null,
      source: "website",
    });

    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    reset();
    window.open(whatsappLink(waMessage), "_blank");
  };

  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-7 shadow-[var(--shadow-card)]">
      <h3 className="font-display mb-5 text-xl font-bold text-brand-dark">Send Enquiry</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="field-label">Your Name</label>
          <input className="field-input" placeholder="Enter your full name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="field-label">Mobile Number</label>
          <input
            className="field-input"
            placeholder="Enter your mobile number"
            maxLength={10}
            {...register("mobile")}
          />
          {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile.message}</p>}
        </div>
        <div>
          <label className="field-label">Service Required</label>
          <select className="field-input" defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select a service...
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
        </div>
        <div>
          <label className="field-label">Message (optional)</label>
          <textarea
            className="field-input min-h-[85px] resize-y"
            placeholder="Any additional details..."
            {...register("message")}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60"
        >
          <Send size={16} />
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
        <FormStatus status={status} />
      </form>
    </div>
  );
}
