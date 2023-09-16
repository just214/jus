import plugin from "tailwindcss/plugin";
import { PluginAPI, PluginCreator } from "tailwindcss/types/config";

export function createPlugin<T>(
  options: T = {} as T & PluginAPI,
  callback: (options: T) => (options: T) => PluginCreator
) {
  return plugin.withOptions(callback(options));
}
