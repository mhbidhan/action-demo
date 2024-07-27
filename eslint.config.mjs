import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      quotes: ["error", "single"],
      // ...pluginJest.configs.recommended.rules,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettierConfig,
  prettierRecommended,
];
