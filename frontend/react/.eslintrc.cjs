module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "template-curly-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        overrides: {
          if: { after: true },
          for: { after: true },
          while: { after: true },
          catch: { after: true },
          switch: { after: true },
        },
      },
    ],
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "react/prop-types": 0,
  },
};
