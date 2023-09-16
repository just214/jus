import plugin from "tailwindcss/plugin";
import { PluginAPI, PluginUtils } from "tailwindcss/types/config";
import twColors from "tailwindcss/colors";
import { createPlugin } from "./createPlugin";
/**
 *
 *
 * plug<Options>(({options, PluginAPI}) => {
 *  return function ({ addBase }) {
 *   addBase({
 *    ":root": {
 *    "--surface-1": twColors.gray[100],
 *
 */

// export const color_plugin = createPlugin<{ test: string; testa: string }>(
//   {
//     test: "1",
//     testa: "2",
//   },
//   (options: T, callback: any) => {
//     return callback(options);
//   }
// );

// export const colors = createPlugin<{ a: number; b: number }>({
//   a: 1,
//   b: 2,
// })((options, cb) => {
//   return;
// });

// export const colorPlugin = plugin.withOptions(function (options = {}) {
//   return function ({ addBase }) {
//     const className = (options as any).className ?? "markdown";

//     addBase({
//       ":root": {
//         "--surface-1": twColors.gray[100],
//         "--surface-2": twColors.gray[200],
//         "--text-1": twColors.gray[800],
//         "--text-2": twColors.gray[600],
//       },
//       "@media (prefers-color-scheme: dark)": {
//         ":root": {
//           "--surface-1": twColors.gray[800],
//           "--surface-2": twColors.gray[900],
//           "--text-1": twColors.gray[100],
//           "--text-2": twColors.gray[200],
//         },
//       },
//     });
//   };
// });
