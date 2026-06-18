"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Rocket, FileText, CheckCircle2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { JOB_OPENINGS } from "@/lib/data/jobs";
import FormStatus from "@/components/ui/FormStatus";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  position: z.string().min(1, "Please select a position"),
  college: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function CareerApplicationForm({ selectedTitle }: { selectedTitle?: string }) {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (selectedTitle) setValue("position", selectedTitle);
  }, [selectedTitle, setValue]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setCvError("File must be under 5MB.");
        return;
      }
      setCvError("");
      setCv(file);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!cv) {
      setCvError("Please upload your CV / resume.");
      return;
    }
    setStatus(null);
    const supabase = getSupabaseClient();

    if (!supabase) {
      setStatus("error");
      return;
    }

    const fileName = `${Date.now()}-${cv.name.replace(/\s+/g, "-")}`;
    const { error: uploadError } = await supabase.storage.from("resumes").upload(fileName, cv);
    if (uploadError) {
      setStatus("error");
      return;
    }
    const { data: pub } = supabase.storage.from("resumes").getPublicUrl(fileName);

    const { error } = await supabase.from("job_applications").insert({
      full_name: data.name,
      email: data.email,
      phone: data.phone,
      position: data.position,
      college: data.college || null,
      message: data.message || null,
      resume_url: pub.publicUrl,
    });

    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    reset();
    setCv(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
      <h2 className="font-display text-xl font-bold text-brand-dark">Application Form</h2>
      <p className="mt-1 mb-6 text-sm text-ink-2">
        {selectedTitle ? `Applying for: ${selectedTitle}` : "Select a position above or choose below."}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="field-label">Full Name *</label>
          <input className="field-input" placeholder="Your full name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="field-label">Email Address *</label>
          <input className="field-input" placeholder="your@email.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="field-label">Mobile Number *</label>
          <input className="field-input" placeholder="10-digit mobile number" maxLength={10} {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="field-label">Position Applying For *</label>
          <select className="field-input" defaultValue={selectedTitle || ""} {...register("position")}>
            <option value="" disabled>
              Select position...
            </option>
            {JOB_OPENINGS.map((j) => (
              <option key={j.id} value={j.title}>
                {j.title}
              </option>
            ))}
          </select>
          {errors.position && <p className="mt-1 text-xs text-red-600">{errors.position.message}</p>}
        </div>
        <div>
          <label className="field-label">College / University</label>
          <input className="field-input" placeholder="Your college or university name" {...register("college")} />
        </div>
        <div>
          <label className="field-label">Why do you want to join eSakha?</label>
          <textarea
            className="field-input min-h-[90px] resize-y"
            placeholder="Tell us a bit about yourself and your motivation..."
            {...register("message")}
          />
        </div>
        <div>
          <label className="field-label">Upload CV / Resume *</label>
          <div
            onClick={() => fileRef.current?.click()}
            className="cursor-pointer rounded-xl border-2 border-dashed border-line-2 bg-brand-light px-6 py-7 text-center transition hover:border-brand hover:bg-line-2"
          >
            <FileText className="mx-auto text-brand" size={28} />
            <p className="mt-2 text-sm font-medium text-brand-dark">Click to upload your CV</p>
            <p className="text-xs text-ink-3">PDF, DOC, DOCX — Max 5MB</p>
            {cv && (
              <p className="mt-2 flex items-center justify-center gap-1.5 text-sm font-semibold text-brand">
                <CheckCircle2 size={15} /> {cv.name}
              </p>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFile}
          />
          {cvError && <p className="mt-1 text-xs text-red-600">{cvError}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60"
        >
          <Rocket size={16} />
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
        <FormStatus status={status} />
      </form>
    </div>
  );
}
