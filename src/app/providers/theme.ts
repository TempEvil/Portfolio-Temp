import { defineConfig, defineRecipe, defineSemanticTokens, defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  fonts: {
    body: { value: `'DMSans', 'NotoSansKhmer', serif` },
    heading: { value: `'Playfair', 'NotoSansKhmer', serif` },
  },
  colors: {
    // Soft white instead of pure #fff — used for cards and text on dark fills
    white: { value: "#FCFCFC" },

    // ─── Neutral (slightly cool-tinted gray) ─────────────────────────────────
    neutral: {
      50: { value: "#F5F5F5" }, // page bg (light) / text (dark)
      100: { value: "#EBEBEB" }, // hover (light) / primary (dark)
      200: { value: "#DDDDDD" }, // border (light)
      300: { value: "#C4C4C8" }, // subtle text (dark)
      400: { value: "#A1A1AA" }, // muted text (dark)
      500: { value: "#71717A" }, // muted text (light)
      600: { value: "#52525B" }, // subtle text (light)
      700: { value: "#2A2A2E" }, // border / hover (dark)
      800: { value: "#1F1F23" }, // card (dark)
      900: { value: "#18181B" }, // bg (dark) / text (light)
      950: { value: "#111113" }, // soft ink — primary (light)
    },

    // ─── Accent (blue, 500 = your existing #3b82f6) ──────────────────────────
    accent: {
      50: { value: "#EFF6FF" },
      100: { value: "#DBEAFE" },
      200: { value: "#BFDBFE" },
      300: { value: "#93C5FD" },
      400: { value: "#60A5FA" },
      500: { value: "#3B82F6" },
      600: { value: "#2563EB" },
      700: { value: "#1D4ED8" },
      800: { value: "#1E40AF" },
      900: { value: "#172554" },
    },

    // ─── Resume section background ───────────────────────────────────────────
    resumeBg: {
      50: { value: "#5553b4" },
      100: { value: "#2b275c" },
    },

    // ─── Status ──────────────────────────────────────────────────────────────
    success: {
      50: { value: "#EAF7F0" },
      400: { value: "#2ECC71" },
      500: { value: "#27AE60" },
      900: { value: "#0D2B1F" },
    },
    warning: {
      50: { value: "#FEF6E4" },
      400: { value: "#F5B041" },
      500: { value: "#F39C12" },
      900: { value: "#2D1F00" },
    },
    error: {
      50: { value: "#FDF0EE" },
      400: { value: "#F07068" },
      500: { value: "#E74C3C" },
      900: { value: "#2D0A0A" },
    },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    theme: {
      // ─── Primary (soft ink on light, soft paper on dark) ───────────────────
      primary: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
      primaryHover: { value: { base: "{colors.neutral.800}", _dark: "{colors.neutral.200}" } },
      primaryActive: { value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.300}" } },
      primarySubtle: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
      primaryMuted: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" } },
      primaryForeground: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },

      // ─── Accent (blue) ─────────────────────────────────────────────────────
      accent: { value: { base: "{colors.accent.500}", _dark: "{colors.accent.400}" } },
      accentHover: { value: { base: "{colors.accent.600}", _dark: "{colors.accent.300}" } },
      accentSubtle: { value: { base: "{colors.accent.50}", _dark: "{colors.accent.900}" } },
      accentForeground: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },

      // ─── Surfaces ──────────────────────────────────────────────────────────
      bg: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },
      bgSubtle: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
      bgCard: { value: { base: "{colors.white}", _dark: "{colors.neutral.800}" } },
      bgHover: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.700}" } },
      bgActive: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.600}" } },

      // ─── Borders ───────────────────────────────────────────────────────────
      border: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" } },
      borderSubtle: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
      borderStrong: { value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.500}" } },
      borderPrimary: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
      borderFocus: { value: { base: "{colors.accent.500}", _dark: "{colors.accent.400}" } },

      // ─── Text ──────────────────────────────────────────────────────────────
      text: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.100}" } },
      textSubtle: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.300}" } },
      textMuted: { value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" } },
      textOnPrimary: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },
      textLink: { value: { base: "{colors.accent.600}", _dark: "{colors.accent.400}" } },
      textLinkHover: { value: { base: "{colors.accent.800}", _dark: "{colors.accent.300}" } },

      // ─── Status ────────────────────────────────────────────────────────────
      success: { value: { base: "{colors.success.500}", _dark: "{colors.success.400}" } },
      successSubtle: { value: { base: "{colors.success.50}", _dark: "{colors.success.900}" } },
      successForeground: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },

      warning: { value: { base: "{colors.warning.500}", _dark: "{colors.warning.400}" } },
      warningSubtle: { value: { base: "{colors.warning.50}", _dark: "{colors.warning.900}" } },
      warningForeground: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.900}" } },

      error: { value: { base: "{colors.error.500}", _dark: "{colors.error.400}" } },
      errorSubtle: { value: { base: "{colors.error.50}", _dark: "{colors.error.900}" } },
      errorForeground: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },

      // ─── Resume ────────────────────────────────────────────────────────────
      resumeBg: { value: { base: "{colors.resumeBg.50}", _dark: "{colors.resumeBg.100}" } },
      resumeText: { value: "{colors.white}" },
    },
  },
});

// Makes every Skeleton use the "shine" variant with on-theme, dark-mode-aware colors.
const skeletonRecipe = defineRecipe({
  variants: {
    variant: {
      shine: {
        "--start-color": "colors.theme.bgHover",
        "--end-color": "colors.theme.bgActive",
      },
    },
  },
  defaultVariants: {
    variant: "shine",
  },
});

export const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "375px", // phones (portrait + landscape)
      md: "768px", // tablets (iPad & other tablets, BOTH orientations)
      lg: "1200px", // laptops / small desktops
      xl: "1536px", // large desktops
      "2xl": "1920px", // very big screens (optional)
    },
    tokens,
    semanticTokens,
    recipes: {
      skeleton: skeletonRecipe,
    },
  },
});
