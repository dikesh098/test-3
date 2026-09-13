import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with eSakha on WhatsApp"
      className="animate-float fixed bottom-7 right-7 z-[150] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition hover:scale-110"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
