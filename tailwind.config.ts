import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'custom': '0 2px 12px 0 rgba(0, 0, 0, 0.06)',
      },

      screens: {
        'md-desktop411': '880px',
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primarylight))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        ring: "hsl(var(--ring))",
        "brand-primary": "var(--brand-primary)",
        "brand-primary-100": "var(--brand-primary-100)",
        "neutrals-50": "var(--neutrals-50)",
        "neutrals-100": "var(--neutrals-100)",
        "neutrals-200": "var(--neutrals-200)",
        "neutrals-300": "var(--neutrals-300)",
        "neutrals-400": "var(--neutrals-400)",
        "neutrals-500": "var(--neutrals-500)",
        "neutrals-600": "var(--neutrals-600)",
        "neutrals-700": "var(--neutrals-700)",
        "neutrals-800": "var(--neutrals-800)",
        "neutrals-900": "var(--neutrals-900)",
        "green-fill": "var(--green-fill)",
        "green-border": "var(--green-border)",
        "yellow-fill": "var(--yellow-fill)",
        "yellow-border": "var(--yelow-border)",
        "ib-primary-blue": "var(--ib-primary-blue)",
        "gray-background": "var(--gray-background)",
        "wrong-answer": "var(--wrong-answer)",
        "right-answer": "var(--right-answer)",
        "icon-fill": "var(--icon-fill)",
        "primary-500": "var(--primary-500)",
        "primary-200": "var(--primary-200)",
        soft: "var(--soft)",
        subtle: "var(--subtle)",
        "action-sec": "var(--action-sec)",
        "gray-bg": "var(--gray-bg)",
        noise: "var(--noise)",
        inset: "var(--inset)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config