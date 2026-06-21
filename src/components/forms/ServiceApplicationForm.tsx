"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Paperclip, CheckCircle2, X } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { whatsappLink } from "@/lib/constants";
import FormStatus from "@/components/ui/FormStatus";
import { usePayModal } from "@/components/payment/PayModalProvider";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ServiceApplicationForm({
  serviceSlug,
  serviceName,
  payAmount,
}: {
  serviceSlug: string;
  serviceName: string;
  payAmount: number;
}) {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [doc, setDoc] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const { openPay } = usePayModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("File must be under 10MB.");
      return;
    }
    setDoc(file);
  };

  const onSubmit = async (data: FormValues) => {
    setStatus(null);
    const supabase = getSupabaseClient();
    const waMessage = `Hello eSakha!\n\nI'd like to apply for: ${serviceName}\n\nName: ${data.name}\nMobile: ${data.phone}${
      data.message ? `\nMessage: ${data.message}` : ""
    }`;

    if (!supabase) {
      window.open(whatsappLink(waMessage), "_blank");
      setStatus("success");
      reset();
      return;
    }

    let documentUrl: string | null = null;
    if (doc) {
      const fileName = `${serviceSlug}/${Date.now()}-${doc.name.replace(/\s+/g, "-")}`;
      const { error: uploadError } = await supabase.storage
        .from("service-documents")
        .upload(fileName, doc);
      if (!uploadError) {
        const { data: pub } = supabase.storage.from("service-documents").getPublicUrl(fileName);
        documentUrl = pub.publicUrl;
      }
    }

    const { error } = await supabase.from("service_applications").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service_slug: serviceSlug,
      service_name: serviceName,
      message: data.message || null,
      document_url: documentUrl,
    });

    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    reset();
    setDoc(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-7 shadow-[var(--shadow-card)]" id="apply">
      <h3 className="font-display text-xl font-bold text-brand-dark">Apply for {serviceName}</h3>
      <p className="mt-1 mb-5 text-sm text-ink-2">
        Submit your details and our team will reach out to confirm next steps within 24 hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label">Full Name *</label>
            <input className="field-input" placeholder="Your full name" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="field-label">Mobile Number *</label>
            <input
              className="field-input"
              placeholder="10-digit mobile number"
              maxLength={10}
              {...register("phone")}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
          </div>
        </div>
        <div>
          <label className="field-label">Email (optional)</label>
          <input className="field-input" placeholder="your@email.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="field-label">Anything we should know? (optional)</label>
          <textarea
            className="field-input min-h-[80px] resize-y"
            placeholder="Specific requirements, timelines, etc."
            {...register("message")}
          />
        </div>
        <div>
          <label className="field-label">Attach a document (optional)</label>
          <div
            onClick={() => fileRef.current?.click()}
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-dashed border-line-2 bg-white px-4 py-3 text-sm transition hover:border-brand"
          >
            <Paperclip size={16} className="text-brand" />
            {doc ? (
              <span className="flex flex-1 items-center justify-between gap-2 font-medium text-brand-dark">
                <span className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 size={14} className="shrink-0 text-brand" /> {doc.name}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDoc(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                >
                  <X size={14} className="text-ink-3" />
                </button>
              </span>
            ) : (
              <span className="text-ink-3">PDF, JPG, PNG, or DOCX — Max 10MB</span>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.docx"
            className="hidden"
            onChange={handleFile}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60"
          >
            <Send size={16} />
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
          {payAmount > 0 && (
            <button
              type="button"
              onClick={() => openPay(serviceName, payAmount)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-brand bg-white py-3.5 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
            >
              Pay ₹{payAmount.toLocaleString("en-IN")} Now
            </button>
          )}
        </div>
        <FormStatus status={status} />
      </form>
    </div>
  );
}
