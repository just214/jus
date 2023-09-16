export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://cs-lite.vercel.app"
    : "http://localhost:3000";

export const navigationLinks = [
  ["Home", "/"],
  ["About", "/food-shares"],
  ["Contact", "/volunteer"],
];
