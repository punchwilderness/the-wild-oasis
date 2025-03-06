/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sudqvsecthappldqcjoq.supabase.co";

const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1ZHF2c2VjdGhhcHBsZHFjam9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5OTUyNzksImV4cCI6MjA1NjU3MTI3OX0.YrJGeGm35OiIyWR8iw2nbGkz3UF2IRbGafJjOsF0Rok"
);

export default supabase;
