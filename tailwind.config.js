/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["body"]: "var(--body-color)",
        ["main"]: "var(--main-color)",
        ["point"]: "var(--point-color)"
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
        ["kr"]: ["Roboto-Regular", "NotoSans-Regular"]
      }
    }
  },
  plugins: []
};
