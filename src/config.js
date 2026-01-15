const PROD_API = "https://techsprint-irrigation-system.onrender.com/api";

export const API_BASE =
    import.meta.env.VITE_API_BASE && import.meta.env.VITE_API_BASE.trim() !== ""
        ? import.meta.env.VITE_API_BASE
        : PROD_API;
