import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Retrieve Supabase environment variables from Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

let client: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: 'mechcode_supabase_auth'
      }
    });
  } catch (err) {
    console.warn('[MECHCODE] Failed to initialize Supabase client:', err);
    client = null;
  }
}

export const supabase = client;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(client && supabaseUrl && supabaseAnonKey);
};

export const getSupabaseConfig = () => ({
  url: supabaseUrl ? `${supabaseUrl.substring(0, 14)}...` : 'Not Configured',
  isConfigured: isSupabaseConfigured()
});
