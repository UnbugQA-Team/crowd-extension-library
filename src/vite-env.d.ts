/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_KEY: "string";
  VITE_BASE_URL: "string";
  // Add more environment variables as needed
}

interface ImportMeta {
  env: ImportMetaEnv & {
    VITE_API_KEY: "default_api_key_for_development";
    VITE_BASE_URL: "default_base_url_for_development";
  };
}
