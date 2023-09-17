const path = require("path");
const rulesDirPlugin = require("eslint-plugin-rulesdir");

rulesDirPlugin.RULES_DIR = path.join(__dirname, "rules");

module.exports = {
  extends: [
    "eslint:recommended",
    "react-app", // See below
    "react-app/jest",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["jsx-a11y", "rulesdir"],
  rules: {
    "no-case-declarations": "off",

    "no-console": ["error", { allow: ["error", "warn", "info"] }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "rulesdir/no-public-secrets": "error",
    // only allow descriptive ts-expect-errors. Full Explanation https://github.com/APSPhysics/eslint-config/issues/5
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
  ignorePatterns: [
    "dist",
    "out",
    "node_modules",
    "examples",
    "scripts",
    "tailwind-config",
    "*.css",
    "*.svg",
  ],
};

/**
 * eslint-config-react-app
 * Docs:
 * https://www.npmjs.com/package/eslint-config-react-app
 *
 * Source:
 * https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js
 * This is a default eslint configuration created and maintained the Facebook team,
 * primarily for use with create-react-app.
 * This default configuration is well thought-out and actively maintained. It includes sensible rules for
 * React-specific apps, including hooks usage. It also includes accessibility rules via react-a11y as
 * well as rules for import statements and a few other niceties.
 */
