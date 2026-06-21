import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

/**
 * Lazily creates a singleton browser Supabase client.
 *
 * Returns `null` (instead of throwing) when env vars are missing so the
 * site still builds and renders before real Supabase credentials are
 * added — forms simply fall back to a WhatsApp handoff in that case.
 * See README.md "Connecting Supabase" for setup steps.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (client) return client;
  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== "undefined") {
      console.warn(
        "[eSakha] Supabase env vars are not set yet — forms will fall back to WhatsApp. " +
          "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local."
      );
    }
    return null;
  }
  client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
