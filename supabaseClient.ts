import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(
  supabaseUrl as string,
  supabaseAnonKey as string,
  { auth: { persistSession: false } }
);

export const supabaseClient = createBrowserClient(
  supabaseUrl as string,
  supabaseAnonKey as string
);

export default supabase;
