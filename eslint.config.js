const js = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      quotes: ["warn", "double", { avoidEscape: true }],
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "no-prototype-builtins": "off",
      "no-constant-binary-expression": "off",
    },
  },
  {
    ignores: [
      "lib/**", 
      "node_modules/**", 
      "coverage/**", 
      "**/*.d.ts",
      "**/*.js",
      "test/**",
      ".eslintrc.js",
      "eslint.config.js"
    ],
  },
];
