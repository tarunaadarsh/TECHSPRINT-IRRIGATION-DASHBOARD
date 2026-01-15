// Centralized API Configuration
// This ensures the app works even if environment variables are missing in production

export const API_BASE = import.meta.env.VITE_API_BASE || "https://techsprint-irrigation-system.onrender.com/api";

console.log('🔌 API Base URL:', API_BASE);
