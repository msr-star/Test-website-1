import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pzclpnlcpvqqcevucjhu.supabase.co'
const supabaseAnonKey = 'sb_publishable_RD6EX5AolerbwT_xi-2fwg_glyUWe5y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
