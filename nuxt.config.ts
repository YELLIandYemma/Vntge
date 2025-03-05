import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: true, // Enable server-side rendering
  nitro: {
    preset: "vercel",
  },

  runtimeConfig: {
    public: {
      SUPABASE_URL: "https://mxwnbadvrpojyeofbbft.supabase.co",
      SUPABASE_KEY:
        "SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14d25iYWR2cnBvanllb2ZiYmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDk0MjIsImV4cCI6MjA1NTg4NTQyMn0.p8cYfJ3GjBWCd1qGW5o_DQkXE5N8CNA8PUMkSnFrVPw",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
