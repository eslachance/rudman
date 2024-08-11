import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: "error",
      "no-unused-vars": "error",
      "no-undef": "error",
      "indent": ["error", 2]
    }
  }
];
