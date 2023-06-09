/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f2f1f1",
        },
        black: "#000",
        dimgray: {
          "100": "#686361",
          "200": "#745b53",
          "300": "#4f4f4f",
        },
        darkgray: {
          "100": "#aa9b97",
          "200": "#a4928d",
          "300": "rgba(182, 179, 179, 0.85)",
        },
        darkslategray: {
          "100": "#48484a",
          "200": "#3c3c3c",
        },
        silver: "rgba(189, 189, 189, 0.1)",
        rosybrown: "#ac8a73",
        red: {
          "100": "#f61b1b",
          "200": "#ee1313",
        },
        dodgerblue: "#2f80ed",
        white: "#fff",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      "11xl": "30px",
      "21xl": "40px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
