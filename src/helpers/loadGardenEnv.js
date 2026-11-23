const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Public non-secret Digital Garden UI & theme configuration mirroring .env.
// Hosting platforms like Vercel do not inject committed .env files during build;
// this guarantees the sidebar (filetree), theme (Things dark), inline titles,
// language, and Style Settings apply identically in production and locally.
const DEFAULT_GARDEN_ENV = {
  dgHomeLink: "true",
  dgShowBacklinks: "false",
  dgShowLocalGraph: "false",
  dgShowGraphDepthControl: "false",
  dgShowInlineTitle: "true",
  dgShowFileTree: "true",
  dgEnableSearch: "false",
  dgShowToc: "false",
  dgLinkPreview: "false",
  dgShowTags: "true",
  SITE_NAME_HEADER: "Sistema de Estudio IA por Duilio",
  SITE_MAIN_LANGUAGE: "es",
  SITE_BASE_URL: "https://guias-ia-facu.vercel.app",
  SHOW_CREATED_TIMESTAMP: "false",
  TIMESTAMP_FORMAT: "MMM dd, yyyy h:mm a",
  SHOW_UPDATED_TIMESTAMP: "false",
  NOTE_ICON_DEFAULT: "",
  NOTE_ICON_TITLE: "false",
  NOTE_ICON_FILETREE: "false",
  NOTE_ICON_INTERNAL_LINKS: "false",
  NOTE_ICON_BACK_LINKS: "false",
  THEME: "https://raw.githubusercontent.com/colineckert/obsidian-things/HEAD/theme.css",
  BASE_THEME: "dark",
  STYLE_SETTINGS_CSS:
    "body.css-settings-manager { --h1-size: 1.8em; --h2-weight: 700; --h3-size: 1.3em; --h4-weight: 600; --h4-transform: none; --h5-weight: 700; --h6-weight: 600; }",
  STYLE_SETTINGS_BODY_CLASSES:
    "obsidian-app styled-scrollbars show-inline-title css-settings-manager active-line fancy-highlight progress-color",
  USE_FULL_RESOLUTION_IMAGES: "true",
  dgPassFrontmatter: "false",
};

let loaded = false;

function loadGardenEnv() {
  if (loaded) return;
  loaded = true;
  const envPath = path.resolve(__dirname, "../../.env");
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  }
  for (const [key, value] of Object.entries(DEFAULT_GARDEN_ENV)) {
    if (process.env[key] === undefined || process.env[key] === "") {
      process.env[key] = value;
    }
  }
}

module.exports = loadGardenEnv;
