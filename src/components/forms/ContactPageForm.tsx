"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { whatsappLink } from "@/lib/constants";
import FormStatus from "@/components/ui/FormStatus";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  message: z.string().min(5, "Tell us a little about what you need"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPageForm() {
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
    const waMessage = `Hello eSakha!\n\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`;

    if (!supabase) {
      window.open(whatsappLink(waMessage), "_blank");
      setStatus("success");
      reset();
      return;
    }

    const { error } = await supabase.from("contacts").insert({
      name: data.name,
      email: data.email || null,
      phone: data.phone,
      message: data.message,
    });

    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Full Name *</label>
          <input className="field-input" placeholder="Your full name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="field-label">Mobile Number *</label>
          <input className="field-input" placeholder="10-digit mobile number" maxLength={10} {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="field-label">Email Address (optional)</label>
        <input className="field-input" placeholder="your@email.com" {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="field-label">How can we help? *</label>
        <textarea
          className="field-input min-h-[110px] resize-y"
          placeholder="Tell us what you need help with..."
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60"
      >
        <Send size={16} />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <FormStatus status={status} />
    </form>
  );
}
