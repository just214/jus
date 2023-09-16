import twPlugin from "tailwindcss/plugin";
import twColors from "tailwindcss/colors";

export const plugin = twPlugin.withOptions(function (options = {}) {
  return function ({ addBase }) {
    addBase({
      ":root": {
        "--surface-1": twColors.gray[100],
        "--surface-2": twColors.gray[200],
        "--text-1": twColors.gray[800],
        "--text-2": twColors.gray[600],
      },
      "@media (prefers-color-scheme: dark)": {
        ":root": {
          "--surface-1": twColors.gray[800],
          "--surface-2": twColors.gray[900],
          "--text-1": twColors.gray[100],
          "--text-2": twColors.gray[200],
        },
      },
    });
  };
});
