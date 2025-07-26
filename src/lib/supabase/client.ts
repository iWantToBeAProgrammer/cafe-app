import { environment } from "@/config/environment";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
    const { SUPABASE_URL: supabaseUrl, SUPABASE_ANON_KEY: supabaseKey } = environment;
    createBrowserClient(
        supabaseUrl!,
        supabaseKey!,
    )
}