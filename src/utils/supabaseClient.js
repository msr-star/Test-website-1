import { createClient } from '@supabase/supabase-js';

// Prefer environment variables (Vite) with safe fallbacks for local development.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://pzclpnlcpvqqcevucjhu.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_RD6EX5AolerbwT_xi-2fwg_glyUWe5y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
