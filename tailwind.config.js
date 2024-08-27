/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["body-color"]: "var(--body-color)",
        ["main-color"]: "var(--main-color)",
        ["point-color"]: "var(--point-color)"
      },
      boxShadow: {
        ["container-shadow"]: "var(--container-shadow)"
      },
      padding: {
        ["default-layout-px"]: "var(--default-layout-px)"
      }
    }
  },
  plugins: []
};
