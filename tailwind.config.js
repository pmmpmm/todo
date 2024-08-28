/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ["body"]: "var(--body-color)",
        ["main"]: "var(--main-color)",
        ["point"]: "var(--point-color)",
        ["on"]: "var(--text-on-color)",
        ["off"]: "var(--text-off-color)"
      },
      boxShadow: {
        ["container-shadow"]: "var(--container-shadow)"
      },
      padding: {
        ["default-layout-px"]: "var(--default-layout-px)"
      },
      fontFamily: {
        ["paperlogy-Light"]: ["Paperlogy-Light", "system-ui", "sans-serif"],
        ["paperlogy-Regular"]: ["Paperlogy-Regular", "system-ui", "sans-serif"],
        ["paperlogy-Medium"]: ["Paperlogy-Medium", "system-ui", "sans-serif"],
        ["paperlogy-SemiBold"]: ["Paperlogy-SemiBold", "system-ui", "sans-serif"],
        ["paperlogy-Bold"]: ["Paperlogy-Bold", "system-ui", "sans-serif"],
        ["kr"]: ["Roboto-Regular", "NotoSans-Regular", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
