import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mxwnbadvrpojyeofbbft.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14d25iYWR2cnBvanllb2ZiYmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDk0MjIsImV4cCI6MjA1NTg4NTQyMn0.p8cYfJ3GjBWCd1qGW5o_DQkXE5N8CNA8PUMkSnFrVPw";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export function useSupabaseClient() {
  return supabase;
}
