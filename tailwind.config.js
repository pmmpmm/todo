/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
        ["paperlogy-Light"]: ["Paperlogy-Light"],
        ["paperlogy-Regular"]: ["Paperlogy-Regular"],
        ["paperlogy-Medium"]: ["Paperlogy-Medium"],
        ["paperlogy-SemiBold"]: ["Paperlogy-SemiBold"],
        ["paperlogy-Bold"]: ["Paperlogy-Bold"],
        ["kr"]: ["Roboto-Regular", "NotoSans-Regular"]
      }
    }
  },
  plugins: []
};
